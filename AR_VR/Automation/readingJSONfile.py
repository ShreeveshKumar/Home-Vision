import bpy
import json

# Deleting everything...
coll = bpy.data.collections["TestBench"]
    # Unlink
bpy.context.scene.collection.children.unlink(coll)
    # Remove
bpy.data.collections.remove(coll)

bpy.ops.object.select_all(action = "SELECT")
bpy.ops.object.delete(use_global = False)

# Constants...
pillar_height = 1.5

# Reading file...
test = 'E:/Blender/Scripting/Testing Folder/test.json'
with open(test, 'r') as jsf:
    data = json.load(jsf)

# Extracting contents...
end = data['Count']
nam = data['Name']
dim = data['Dimentions']
loc = data['Location']

# Creating Collection...
new_coll = bpy.data.collections.new("TestBench")
bpy.context.scene.collection.children.link(new_coll)
bpy.context.view_layer.active_layer_collection = bpy.context.view_layer.layer_collection.children[0]



# Execuing accoring to file
# Looping whole block
max = data['Count']
for i in range(max):
    size = dim[i]
    size.append(pillar_height)
    Dimentions = tuple(size)
    Loc = loc[i]
    Loc.append(0)
    Location = tuple(Loc)
    
    # Pillar's
    # Creating using primitive: ''Cube''
    bpy.ops.mesh.primitive_cube_add(scale = Dimentions, location = Location)
    pillar = bpy.context.object
    pillar.name = nam[i]


# Adding Base
sizebase = list(data['Size_Base'])
sizebase.append(0)
Size_Base = tuple(sizebase)
bpy.ops.mesh.primitive_plane_add(scale = Size_Base, location=(0, 0, -pillar_height))
base = bpy.context.object
base.name = 'Base'
base.scale = Size_Base
