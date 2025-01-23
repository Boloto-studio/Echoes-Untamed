ServerEvents.recipes(e => {
    const recipeIdsToRemove = [
        "valhelsia_furniture:oak_table",
        "valhelsia_furniture:birch_table",
        "valhelsia_furniture:jungle_table",
        "valhelsia_furniture:cherry_table",
        "valhelsia_furniture:dark_oak_table",
        "valhelsia_furniture:mangrove_table",
        "valhelsia_furniture:crimson_table",
        "valhelsia_furniture:warped_table",
        "valhelsia_furniture:spruce_table",
        "valhelsia_furniture:oak_chair",
        "valhelsia_furniture:birch_chair",
        "valhelsia_furniture:jungle_chair",
        "valhelsia_furniture:cherry_chair",
        "valhelsia_furniture:dark_oak_chair",
        "valhelsia_furniture:mangrove_chair",
        "valhelsia_furniture:crimson_chair",
        "valhelsia_furniture:warped_chair",
        "valhelsia_furniture:spruce_chair",
    ]
    recipeIdsToRemove.forEach(recipe => e.remove({id:recipe}));

    // Tables
    e.shaped("valhelsia_furniture:oak_table", [
        "   ",
        "AAA",
        "B B"
    ], {
        A: "minecraft:oak_planks",
        B: "minecraft:stick"
    })
    e.shaped("valhelsia_furniture:birch_table", [
        "   ",
        "AAA",
        "B B"
    ], {
        A: "minecraft:birch_planks",
        B: "minecraft:stick"
    })
    e.shaped("valhelsia_furniture:jungle_table", [
        "   ",
        "AAA",
        "B B"
    ], {
        A: "minecraft:jungle_planks",
        B: "minecraft:stick"
    })
    e.shaped("valhelsia_furniture:cherry_table", [
        "   ",
        "AAA",
        "B B"
    ], {
        A: "minecraft:cherry_planks",
        B: "minecraft:stick"
    })
    e.shaped("valhelsia_furniture:dark_oak_table", [
        "   ",
        "AAA",
        "B B"
    ], {
        A: "minecraft:dark_oak_planks",
        B: "minecraft:stick"
    })
    e.shaped("valhelsia_furniture:mangrove_table", [
        "   ",
        "AAA",
        "B B"
    ], {
        A: "minecraft:mangrove_planks",
        B: "minecraft:stick"
    })
    e.shaped("valhelsia_furniture:crimson_table", [
        "   ",
        "AAA",
        "B B"
    ], {
        A: "minecraft:crimson_planks",
        B: "minecraft:stick"
    })
    e.shaped("valhelsia_furniture:warped_table", [
        "   ",
        "AAA",
        "B B"
    ], {
        A: "minecraft:warped_planks",
        B: "minecraft:stick"
    })
    e.shaped("valhelsia_furniture:spruce_table", [
        "   ",
        "AAA",
        "B B"
    ], {
        A: "minecraft:spruce_planks",
        B: "minecraft:stick"
    })

    // Plain chairs
    e.shaped(Item.of("valhelsia_furniture:oak_chair", 2), [
        "B  ",
        "AAA",
        "B B"
    ], {
        A: "minecraft:oak_planks",
        B: "minecraft:stick"
    })
    e.shaped(Item.of("valhelsia_furniture:birch_chair", 2), [
        "B  ",
        "AAA",
        "B B"
    ], {
        A: "minecraft:birch_planks",
        B: "minecraft:stick"
    })
    e.shaped(Item.of("valhelsia_furniture:jungle_chair", 2), [
        "B  ",
        "AAA",
        "B B"
    ], {
        A: "minecraft:jungle_planks",
        B: "minecraft:stick"
    })
    e.shaped(Item.of("valhelsia_furniture:cherry_chair", 2), [
        "B  ",
        "AAA",
        "B B"
    ], {
        A: "minecraft:cherry_planks",
        B: "minecraft:stick"
    })
    e.shaped(Item.of("valhelsia_furniture:dark_oak_chair", 2), [
        "B  ",
        "AAA",
        "B B"
    ], {
        A: "minecraft:dark_oak_planks",
        B: "minecraft:stick"
    })
    e.shaped(Item.of("valhelsia_furniture:mangrove_chair", 2), [
        "B  ",
        "AAA",
        "B B"
    ], {
        A: "minecraft:mangrove_planks",
        B: "minecraft:stick"
    })
    e.shaped(Item.of("valhelsia_furniture:crimson_chair", 2), [
        "B  ",
        "AAA",
        "B B"
    ], {
        A: "minecraft:crimson_planks",
        B: "minecraft:stick"
    })
    e.shaped(Item.of("valhelsia_furniture:warped_chair", 2), [
        "B  ",
        "AAA",
        "B B"
    ], {
        A: "minecraft:warped_planks",
        B: "minecraft:stick"
    })
    e.shaped(Item.of("valhelsia_furniture:spruce_chair", 2), [
        "B  ",
        "AAA",
        "B B"
    ], {
        A: "minecraft:spruce_planks",
        B: "minecraft:stick"
    })
})