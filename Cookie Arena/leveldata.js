const levels = {
    2: { required: 100, boxreward: 1, powerPlus: 0.5, gemsPlus: 10 },
    3: { required: 200, boxreward: 1, powerPlus: 0, gemsPlus: 10 },
    4: { required: 400, boxreward: 0, powerPlus: 0.5, gemsPlus: 20 },
    5: { required: 600, boxreward: 1, powerPlus: 0, gemsPlus: 20 },
    6: { required: 800, boxreward: 1, powerPlus: 0.5, gemsPlus: 20 },
    7: { required: 1000, boxreward: 1, powerPlus: 0, gemsPlus: 20 },
    8: { required: 1400, boxreward: 0, powerPlus: 0, gemsPlus: 30 },
    9: { required: 1800, boxreward: 1, powerPlus: 0, gemsPlus: 30 },
    10: { required: 2200, boxreward: 0, powerPlus: 0, gemsPlus: 30 },
};

const arenaList = {
    1: { name: "Green Arena", required: 0, gemsPlus: 0, hpPlus: 0, pathName: "green\ arena" }, // green arena
    2: { name: "Wooden Fences", required: 350, gemsPlus: 10, hpPlus: 100, pathName: "wooden\ fences" }, // wooden fences
    3: { name: "Stone Age", required: 750, gemsPlus: 15, hpPlus: 100, pathName: "stone\ age" }, // stone age
    4: { name: "Desert Arena", required: 1150, gemsPlus: 20, hpPlus: 100, pathName: "desert\ arena" }, // desert arena
};