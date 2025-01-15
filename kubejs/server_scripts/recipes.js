ServerEvents.recipes(e => {
    e.shapeless("create:rose_quartz", [
        "biomesoplenty:rose_quartz_chunk",
        "biomesoplenty:rose_quartz_chunk",
        "biomesoplenty:rose_quartz_chunk",
        "biomesoplenty:rose_quartz_chunk",
        "biomesoplenty:rose_quartz_chunk",
        "biomesoplenty:rose_quartz_chunk",
        "biomesoplenty:rose_quartz_chunk",
        "biomesoplenty:rose_quartz_chunk",
        "biomesoplenty:rose_quartz_chunk",
    ])
    e.shapeless(Item.of("biomesoplenty:rose_quartz_chunk", 4), [
        "biomesoplenty:rose_quartz_block"
    ])
})