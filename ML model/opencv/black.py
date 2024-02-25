import cv2
import json
import os

# Load the 2D map image
image = cv2.imread('square.png', cv2.IMREAD_GRAYSCALE)

# Define the origin of the coordinate system as None
origin = None

# Define the scale (1cm = 1cm)
scale = 1

# Initialize the map features list
map_features = []

# Set the minimum size of a black box (in pixels)
min_size = 25

# Iterate over the image and identify the rectangular black boxes
for y in range(1, image.shape[0] - 1):
    for x in range(1, image.shape[1] - 1):
        if image[y, x] == 0:
            if image[y-1, x] == 0 and image[y+1, x] == 0 and image[y, x-1] == 0 and image[y, x+1] == 0:
                # Calculate the size of the black box
                size_x = 1
                while x + size_x < image.shape[1] and image[y, x + size_x] == 0:
                    size_x += 1
                size_y = 1
                while y + size_y < image.shape[0] and image[y + size_y, x] == 0:
                    size_y += 1
                # Check if the black box meets the minimum size requirement
                if size_x * size_y >= min_size:
                    # Update the origin if it is None
                    if origin is None:
                        origin = (x, y)
                    # Calculate the coordinates of the black box
                    box_coords = [(x + i, y + j) for i in range(size_x) for j in range(size_y)]
                    # Add the black box to the map features list
                    map_features.append({'coordinates': [(c[0] - origin[0], c[1] - origin[1]) for c in box_coords], 'id': f'box {len(map_features) + 1}', 'x': [c[0] - origin[0] for c in box_coords], 'y': [c[1] - origin[1] for c in box_coords]})

# Save the map features to a JSON file
with open(os.path.join(os.getcwd(), 'hi.json'), 'w') as f:
    json.dump(map_features, f, indent=4)
    f.close()