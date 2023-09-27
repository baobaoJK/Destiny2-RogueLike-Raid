$(function () {

    // 属性
    let outTime = 11000;
    let equipmentName = "";
    let equipmentRoll = false;

    // 泰坦 护甲 按钮
    // -----------------------------------------------------------------------------------------------
    $("#titanArmor").click(function (e) {
        rollEquipmentList("titan", titanArmor, equipmentRoll, outTime);
        equipmentRoll = true;
        setTimeout(function () {
            equipmentRoll = false;
        }, outTime);
    });

    // 猎人 护甲 按钮
    // -----------------------------------------------------------------------------------------------
    $("#hunterArmor").click(function (e) {
        rollEquipmentList("hunter", hunterArmor, equipmentRoll, outTime);
        equipmentRoll = true;
        setTimeout(function () {
            equipmentRoll = false;
        }, outTime);
    });

    // 术士 护甲 按钮
    // -----------------------------------------------------------------------------------------------
    $("#warlockArmor").click(function (e) {
        rollEquipmentList("warlock", warlockArmor, equipmentRoll, outTime);
        equipmentRoll = true;
        setTimeout(function () {
            equipmentRoll = false;
        }, outTime);
    });

    // 异域 武器 按钮
    // -----------------------------------------------------------------------------------------------
    $("#weapon-button").click(function (e) {
        rollEquipmentList("weapons", weaponList, equipmentRoll, outTime);
        equipmentRoll = true;
        setTimeout(function () {
            equipmentRoll = false;
        }, outTime);
    });

    // 护甲列表重置 按钮
    // -----------------------------------------------------------------------------------------------
    $(".equipment-close").click(function (e) {
        setTimeout(function () {
            $(".equipment-roll-list img").remove();
            $(".equipment-roll-list").css({
                "transform": "translateX(90px)",
                "transition": "none"
            });
            $(".equipment-confirm-box").css("opacity", 0);
        }, 500);
    });
});

// 设置 装备 列表信息
function setEquipmentRollList(profession, equipment) {
    // 数量
    let lotteryCount = 100;
    // 添加 护甲 信息
    for (let i = 0; i < lotteryCount; i++) {
        let lotterys;
        if (i == lotteryCount - 7) {
            lotterys = lotteryByNum(equipment);
            lotterys.num -= 1;
            equipmentName = lotterys.name;
        }
        else {
            lotterys = lottery(equipment);
        }
        $(".equipment-roll-list").append("<img src='images/" + profession + "/" + lotterys.name
            + ".jpg' alt='" + lotterys.name + ".jpg' class='" + profession + "Img'>");
    }
}
// 抽取 装备
function rollEquipmentList(profession, equipment, equipmentRoll, outTime) {
    if (!equipmentRoll) {
        // 添加文本
        setEquipmentRollList(profession, equipment);
        // -9744px - -9846px
        let px = -9744 - parseInt(Math.random() * (102 - 0 + 1) + 0);

        // 倒数第 7 个
        setTimeout(function () {
            $(".equipment-roll-list").css({
                "transform": "translateX(" + px + "px)",
                "transition": "all 10s cubic-bezier(0.1, 0.4, 0.25, 1)"
            });
        }, 200);

        setTimeout(function () {
            $(".equipment-confirm-box").css("opacity", 1);
            $(".equipment-name").text(equipmentName);
        }, outTime);
    }
}

// 泰坦 护甲 列表
// -----------------------------------------------------------------------------------------------
let titanArmor = [
    { id: 1, name: "猖獗雄狮", weight: 0.08, num: 1 },
    { id: 2, name: "亚克兴角战役钻机", weight: 0.08, num: 1 },
    { id: 3, name: "圣人14的头盔", weight: 0.08, num: 1 },
    { id: 4, name: "Mk.44让开", weight: 0.08, num: 1 },
    { id: 5, name: "至纯光能护心甲", weight: 0.08, num: 1 },
    { id: 6, name: "独眼面具", weight: 0.08, num: 1 },
    { id: 7, name: "游隼胫甲", weight: 0.08, num: 1 },
    { id: 8, name: "西坦壁垒", weight: 0.08, num: 1 },
    { id: 9, name: "永劫安泰", weight: 0.06, num: 1 },
    { id: 10, name: "医疗设备", weight: 0.06, num: 1 },
    { id: 11, name: "沙丘行者", weight: 0.05, num: 1 },
    { id: 12, name: "毁灭之牙肩甲", weight: 0.05, num: 1 },
    { id: 13, name: "难以逾越的颅骨堡垒", weight: 0.05, num: 1 },
    { id: 14, name: "合成感受器", weight: 0.03, num: 1 },
    { id: 15, name: "陨星胸甲", weight: 0.03, num: 1 },
    { id: 16, name: "罗蕾莱辉煌头盔", weight: 0.03, num: 1 },
]

// 猎人护甲 列表
// -----------------------------------------------------------------------------------------------
let hunterArmor = [
    { id: 1, name: "奥菲斯钻机", weight: 0.08, num: 1 },
    { id: 2, name: "巨龙之影", weight: 0.08, num: 1 },
    { id: 3, name: "光辉跳舞机", weight: 0.08, num: 1 },
    { id: 4, name: "全知之眼", weight: 0.08, num: 1 },
    { id: 5, name: "雷电通流", weight: 0.08, num: 1 },
    { id: 6, name: "加拉诺碎片", weight: 0.08, num: 1 },
    { id: 7, name: "矛隼胸甲", weight: 0.08, num: 1 },
    { id: 8, name: "失重引力子", weight: 0.08, num: 1 },
    { id: 9, name: "永劫雨燕", weight: 0.06, num: 1 },
    { id: 10, name: "幼年阿罕卡拉之脊", weight: 0.06, num: 1 },
    { id: 11, name: "踢踏5", weight: 0.05, num: 1 },
    { id: 12, name: "星界夜鹰", weight: 0.05, num: 1 },
    { id: 13, name: "虫骸头冠", weight: 0.05, num: 1 },
    { id: 14, name: "骗徒的握手", weight: 0.03, num: 1 },
    { id: 15, name: "刺客风帽", weight: 0.03, num: 1 },
    { id: 16, name: "噬星者之鳞", weight: 0.03, num: 1 },
]

// 术士护甲 列表
// -----------------------------------------------------------------------------------------------
let warlockArmor = [
    { id: 1, name: "神化面纱", weight: 0.08, num: 1 },
    { id: 2, name: "毒蛇面貌", weight: 0.08, num: 1 },
    { id: 3, name: "炫火", weight: 0.08, num: 1 },
    { id: 4, name: "地磁安定靴", weight: 0.08, num: 1 },
    { id: 5, name: "狡诈严冬", weight: 0.08, num: 1 },
    { id: 6, name: "卡恩西坦臂章", weight: 0.08, num: 1 },
    { id: 7, name: "割线纤维", weight: 0.08, num: 1 },
    { id: 8, name: "邪冬的头盔", weight: 0.08, num: 1 },
    { id: 9, name: "永劫灵魂", weight: 0.06, num: 1 },
    { id: 10, name: "风暴头冠", weight: 0.06, num: 1 },
    { id: 11, name: "横断之步", weight: 0.05, num: 1 },
    { id: 12, name: "反转之握", weight: 0.05, num: 1 },
    { id: 13, name: "月之阵营靴", weight: 0.05, num: 1 },
    { id: 14, name: "真理之容", weight: 0.03, num: 1 },
    { id: 15, name: "星火协议", weight: 0.03, num: 1 },
    { id: 16, name: "炎阳护腕", weight: 0.03, num: 1 },
]

// 异域 武器 列表
// -----------------------------------------------------------------------------------------------
let weaponList = [
    { id: 1, name: "糖果生意", weight: 0.0278, num: 1 },
    { id: 2, name: "越橘", weight: 0.0278, num: 1 },
    { id: 3, name: "监护人", weight: 0.0278, num: 1 },
    { id: 4, name: "黑桃A", weight: 0.0278, num: 1 },
    { id: 5, name: "全面爆发", weight: 0.0278, num: 1 },
    { id: 6, name: "劲弩", weight: 0.0278, num: 1 },
    { id: 7, name: "流明", weight: 0.0278, num: 1 },
    { id: 8, name: "堡垒", weight: 0.0278, num: 1 },
    { id: 9, name: "阿格尔的权杖", weight: 0.0278, num: 1 },
    { id: 10, name: "枯骨鳞片", weight: 0.0278, num: 1 },
    { id: 11, name: "瞬变风暴", weight: 0.0278, num: 1 },
    { id: 12, name: "条件终局", weight: 0.0278, num: 1 },
    { id: 13, name: "严苛光芒", weight: 0.0278, num: 1 },
    { id: 14, name: "赴险者", weight: 0.0278, num: 1 },
    { id: 15, name: "烈日弹丸", weight: 0.0278, num: 1 },
    { id: 16, name: "战狮", weight: 0.0278, num: 1 },
    { id: 17, name: "土卫十三", weight: 0.0278, num: 1 },
    { id: 18, name: "三体坐观者", weight: 0.0278, num: 1 },
    { id: 19, name: "帝王蝶", weight: 0.0278, num: 1 },
    { id: 20, name: "神圣裁决", weight: 0.0278, num: 1 },
    { id: 21, name: "第四骑士", weight: 0.0278, num: 1 },
    { id: 22, name: "汤米的火柴盒", weight: 0.0278, num: 1 },
    { id: 23, name: "Vex揭秘者", weight: 0.0278, num: 1 },
    { id: 24, name: "死亡信使", weight: 0.0278, num: 1 },
    { id: 25, name: "D.A.R.C.I", weight: 0.0278, num: 1 },
    { id: 26, name: "牵引器火炮", weight: 0.0278, num: 1 },
    { id: 27, name: "沃德克里夫线圈", weight: 0.0278, num: 1 },
    { id: 28, name: "群居者", weight: 0.0278, num: 1 },
    { id: 29, name: "蠕虫低语", weight: 0.0278, num: 1 },
    { id: 30, name: "睡者之吼", weight: 0.0278, num: 1 },
    { id: 31, name: "双尾狐", weight: 0.0278, num: 1 },
    { id: 32, name: "混乱无序", weight: 0.0278, num: 1 },
    { id: 33, name: "死亡信使", weight: 0.0278, num: 1 },
    { id: 34, name: "利维坦之息", weight: 0.0278, num: 1 },
    { id: 35, name: "救赎之握", weight: 0.0278, num: 1 },
    { id: 36, name: "加拉尔号角", weight: 0.0278, num: 1 }
]