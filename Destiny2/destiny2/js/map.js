$(function () {

    // 属性
    let outTime = 11000;
    let mapName = "";
    let mapRoll = false;

    setMapRollList(maps);

    // 抽取 地图 按钮
    // -----------------------------------------------------------------------------------------------
    $(".map-button").click(function (e) {
        rollMapList(mapRoll, outTime);
        mapRoll = true;
        $(this).attr("disabled", true);
    });
});

// 设置 地图 信息
function setMapRollList(maps) {
    // 数量
    let lotteryCount = 50;
    // 添加 地图 信息
    for (let i = 0; i < lotteryCount; i++) {
        let lotterys;
        if (i == lotteryCount - 7) {
            lotterys = lotteryByNum(maps);
            lotterys.num -= 1;
            mapName = lotterys.name;
        }
        else {
            lotterys = lottery(maps);
        }
        $(".map-list").append("<img src='images/maps/" + lotterys.name
            + ".jpg' alt='" + lotterys.name + ".jpg' class='mapImg'>");
    }
}
// 抽取 装备
function rollMapList(mapRoll, outTime) {
    if (!mapRoll) {
        // 倒数第 7 个
        // 6 -> 14608
        // 7 -> 14276
        // 8 -> 13944 
        $(".map-list").css({
            "transform": "translateX(-" + 14608 + "px)",
            "transition": "all 10s cubic-bezier(0.1, 0.4, 0.25, 1)"
        });

        setTimeout(function () {
            $(".map-text").css("opacity", 1);
            $(".map-text h1").text(mapName);
        }, outTime);
    }
}

// 地图 列表
// -----------------------------------------------------------------------------------------------
let maps = [
    { id: 1, name: "最后一愿", weight: 0.125, num: 1 },
    { id: 2, name: "救赎花园", weight: 0.125, num: 1 },
    { id: 3, name: "深岩墓室", weight: 0.125, num: 1 },
    { id: 4, name: "玻璃拱顶", weight: 0.125, num: 1 },
    { id: 5, name: "门徒誓约", weight: 0.125, num: 1 },
    { id: 6, name: "国王的陨落", weight: 0.125, num: 1 },
    { id: 7, name: "梦魇根源", weight: 0.125, num: 1 },
    { id: 8, name: "克洛塔的末日", weight: 0.125, num: 1 }
];