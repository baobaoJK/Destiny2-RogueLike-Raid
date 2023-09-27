$(function () {

    // 增益 BUFF
    // -----------------------------------------------------------------------------------------------
    // 增益 BUFF 设置
    for (let i = 0; i < 7; i++) {
        let lotterys = lottery(buffList);
        $(".buff-list").append("<p>" + lotterys.name + "</p>");
    }

    // 增益 BUFF 属性
    let buffCount = 0;
    let buffRoll = false;
    let buffDescription = "";

    // 抽取 增益 BUFF 按钮
    $(".buff-button").click(function (e) {
        let _this = this;
        $(_this).attr("disabled", true);
        let outTime = 6000;
        rollBuffList("buff", buffList, buffRoll, ++buffCount, outTime, buffDescription);
        buffRoll = true;
        setTimeout(function () {
            $(_this).attr("disabled", false);
            buffRoll = false;
        }, outTime);
    });

    // 减益 BUFF
    // -----------------------------------------------------------------------------------------------
    // 减益 BUFF 设置
    for (let i = 0; i < 7; i++) {
        let lotterys = lottery(debuffList);
        $(".debuff-list").append("<p>" + lotterys.name + "</p>");
    }

    // 减益 BUFF 属性
    let debuffCount = 0;
    let debuffRoll = false;
    let debuffDescription = "";

    // 抽取 减益 BUFF 按钮
    $(".debuff-button").click(function (e) {
        let _this = this;
        $(_this).attr("disabled", true);
        let outTime = 6000;
        rollBuffList("debuff", debuffList, debuffRoll, ++debuffCount, outTime, debuffDescription);
        setTimeout(function () {
            $(_this).attr("disabled", false);
            debuffRoll = false;
        }, outTime);
    });

    // 删除 减益 BUFF 按钮
    $(".reset-debuff-button").click(function (e) {
        $(".debuff-description-box p").remove();

        // for (let option of debuffList) {
        //     option.num = 1;
        // }
    });

    // 全局 BUFF
    // -----------------------------------------------------------------------------------------------
    // 全局 DEBUFF 设置
    setAllDebuffRollList();

    // 全局 BUFF 属性
    let allDebuffRoll = false;

    // 抽取 全局 DEBUFF 按钮
    $(".all-debuff-button").click(function (e) {
        let _this = this;
        $(_this).attr("disabled", true);
        let outTime = 11000;
        rollAllDebuffList(allDebuffRoll, outTime);
        allDebuffRoll = true;
        setTimeout(function () {
            $(".reset-all-debuff-button").attr("disabled", false);
        }, outTime - 500);
    });

    // 重置 全局 DEBUFF 按钮
    $(".reset-all-debuff-button").click(function (e) {
        let _this = this;
        resetAllDebuffRollList(allDebuff);
        allDebuffRoll = false;
        $(_this).attr("disabled", true);
        $(".all-debuff-button").attr("disabled", false);
    });
});

// 抽取 BUFF 方法
// -----------------------------------------------------------------------------------------------
function rollBuffList(buff, buffList, buffRoll, buffCount, outTime, description) {
    if (!buffRoll) {
        // BUFF 显示数量
        let lotteryCount = 100;
        // BUFF 抽取
        let lotterys;
        // 添加 增益 BUFF 信息
        for (let i = 0; i < lotteryCount; i++) {
            if (i == lotteryCount - 7) {
                lotterys = lotteryByNum(buffList);
                lotterys.num -= 1;
                description = lotterys.name + "：" + lotterys.description;
            }
            else {
                lotterys = lottery(buffList);
            }
            $("." + buff + "-list").append("<p>" + lotterys.name + "</p>");
        }

        // px = count * -(n - 9) * 36 - count * (7 * 36) - (count - 1) * 72;
        let px = buffCount * -((lotteryCount - 9) * 36) - buffCount * (7 * 36) - (buffCount - 1) * 72;

        // 倒数第 7 个
        $("." + buff + "-list").css({
            "transform": "translateY(" + px + "px)",
            "transition": "all 5s cubic-bezier(0.1, 0.4, 0.25, 1)"
        });

        setTimeout(function () {
            $("." + buff + "-description").append("<p class='" + buff + "-description-text " + buff + "-description-animation'>" + description + "</p>");
        }, outTime - 500);

        setTimeout(function () {
            $("." + buff + "-description p").removeClass(buff + "-description-animation");
        }, outTime);
    }
}

// 增益 BUFF 列表
// -----------------------------------------------------------------------------------------------
let buffList = [{
    "id": 1,
    "name": "弹药回收计划",
    "description": "获取所有弹药回收模组以及生产弹药模组",
    "weight": 0.05,
    "num": 1
}, {
    "id": 2,
    "name": "白色纪元",
    "description": "获取紫色白色子弹武器使用权",
    "weight": 0.05,
    "num": 1
}, {
    "id": 3,
    "name": "窃贼手套",
    "description": "使用DIM随机配装进行本次遭遇战",
    "weight": 0.04,
    "num": 1
}, {
    "id": 4,
    "name": "高级护甲商",
    "description": "从护甲池中抽取一件异域护甲（可使用异域护甲特性说明的技能）",
    "weight": 0.04,
    "num": 1
}, {
    "id": 5,
    "name": "高级军火商",
    "description": "从武器池中抽取一把异域武器",
    "weight": 0.04,
    "num": 1
}, {
    "id": 6,
    "name": "百毒不侵",
    "description": "获得所有抗性模组",
    "weight": 0.03,
    "num": 1
}, {
    "id": 7,
    "name": "丰盈",
    "description": "获得所有弹药储备模组",
    "weight": 0.03,
    "num": 1
}, {
    "id": 8,
    "name": "进入光能",
    "description": "获取所有武器激涌模组",
    "weight": 0.03,
    "num": 1
}, {
    "id": 9,
    "name": "获取光能",
    "description": "获得所有可生产能量球，拳到力来，点石成金，拾取能量球回复技能等模组",
    "weight": 0.03,
    "num": 1
}, {
    "id": 10,
    "name": "挽弓",
    "description": "获得一把紫色弓箭",
    "weight": 0.03,
    "num": 1
}, {
    "id": 11,
    "name": "剑圣",
    "description": "获得一把紫色刀剑与一把紫色偃月",
    "weight": 0.03,
    "num": 1
}, {
    "id": 12,
    "name": "聚合",
    "description": "获得一把紫色融合步枪",
    "weight": 0.03,
    "num": 1
}, {
    "id": 13,
    "name": "精准",
    "description": "获得一把紫色线性融合步枪",
    "weight": 0.03,
    "num": 1
}, {
    "id": 14,
    "name": "重装",
    "description": "获得一把紫色机枪",
    "weight": 0.03,
    "num": 1
}, {
    "id": 15,
    "name": "爆破专家",
    "description": "获得一把紫色榴弹发射器",
    "weight": 0.03,
    "num": 1
}, {
    "id": 16,
    "name": "火箭达人",
    "description": "获得一把紫色火箭筒",
    "weight": 0.03,
    "num": 1
}, {
    "id": 17,
    "name": "土狗",
    "description": "获得一把紫色霰弹枪",
    "weight": 0.03,
    "num": 1
}, {
    "id": 18,
    "name": "狙神",
    "description": "获得一把紫色狙击步枪",
    "weight": 0.03,
    "num": 1
}, {
    "id": 19,
    "name": "激光笔",
    "description": "获得一把紫色追踪步枪",
    "weight": 0.03,
    "num": 1
}, {
    "id": 20,
    "name": "烈日能量",
    "description": "获取火属性技能使用权",
    "weight": 0.03,
    "num": 1
}, {
    "id": 21,
    "name": "闪电能量",
    "description": "获取电属性技能使用权",
    "weight": 0.03,
    "num": 1
}, {
    "id": 22,
    "name": "虚空能量",
    "description": "获取虚空属性技能使用权",
    "weight": 0.03,
    "num": 1
}, {
    "id": 23,
    "name": "水晶能量",
    "description": "获取冰属性技能使用权",
    "weight": 0.03,
    "num": 1
}, {
    "id": 24,
    "name": "缚丝能量",
    "description": "获取缚丝技能使用权",
    "weight": 0.03,
    "num": 1
}, {
    "id": 25,
    "name": "烈日耀斑",
    "description": "获得一把紫色烈日属性武器",
    "weight": 0.03,
    "num": 1
}, {
    "id": 26,
    "name": "死亡牵引",
    "description": "获得一把紫色虚空属性武器",
    "weight": 0.03,
    "num": 1
}, {
    "id": 27,
    "name": "传导震颤",
    "description": "获得一把紫色电弧属性武器",
    "weight": 0.03,
    "num": 1
}, {
    "id": 28,
    "name": "接触暗影",
    "description": "获得一把紫色暗影分支属性武器",
    "weight": 0.03,
    "num": 1
}, {
    "id": 29,
    "name": "寄生虫朝圣",
    "description": "获得一把寄生虫，以及烈日枪套",
    "weight": 0.01,
    "num": 1
}, {
    "id": 30,
    "name": "雷霆万钧",
    "description": "获得一把雷神，以及三个电弧储备模组",
    "weight": 0.01,
    "num": 1
}, {
    "id": 31,
    "name": "砥砺刀锋",
    "description": "获得一把剑狙，以及三个动能储备模组",
    "weight": 0.01,
    "num": 1
}, {
    "id": 32,
    "name": "库房劫案",
    "description": "获得一把枯萎囤积",
    "weight": 0.01,
    "num": 1
}, {
    "id": 33,
    "name": "女妖之嚎",
    "description": "获得一把挽歌，以及三个光亮之刃",
    "weight": 0.01,
    "num": 1
}, {
    "id": 34,
    "name": "狼群之王",
    "description": "获得一把狼王，以及烈日储备模组",
    "weight": 0.01,
    "num": 1
}, {
    "id": 35,
    "name": "机炮生意",
    "description": "获得一把机炮，以及烈日储备模组",
    "weight": 0.01,
    "num": 1
}, {
    "id": 36,
    "name": "卡布尔的圣盾",
    "description": "获取一把 VEX 揭秘者，以及一把任意紫色追踪步枪",
    "weight": 0.01,
    "num": 1
}, {
    "id": 37,
    "name": "火力无限",
    "description": "获得所有技能使用权",
    "weight": 0.005,
    "num": 1
}, {
    "id": 38,
    "name": "黄金时代",
    "description": "解锁全部武器使用权",
    "weight": 0.005,
    "num": 1
}];

// 减益 BUFF 列表
// -----------------------------------------------------------------------------------------------
let debuffList = [{
    "id": 1,
    "name": "空中管制",
    "description": "本次遭遇战中只允许一段跳跃 （除跳跳乐外，在遭遇战中只能按一次空格）",
    "weight": 0.0416,
    "num": 1
}, {
    "id": 2,
    "name": "多动症",
    "description": "本次遭遇战中必须一直跳跃 （除跳跳乐外，遭遇战中必须一直按空格）",
    "weight": 0.0416,
    "num": 1
}, {
    "id": 3,
    "name": "缓慢",
    "description": "本次遭遇战中禁止奔跑（禁止使用 shift 键）",
    "weight": 0.0416,
    "num": 1
}, {
    "id": 4,
    "name": "极速快感",
    "description": "本次遭遇战中全程需要按住 Shift 奔跑不能停下来（开枪和换弹时动作结束一次按一次）",
    "weight": 0.0416,
    "num": 1
}, {
    "id": 5,
    "name": "火力覆盖",
    "description": "本次遭遇战中武器只能使用重型武器（技能可以使用）",
    "weight": 0.0416,
    "num": 1
}, {
    "id": 6,
    "name": "缴械",
    "description": "本次遭遇战中禁止开枪（技能可以使用）",
    "weight": 0.0416,
    "num": 1
}, {
    "id": 7,
    "name": "最短距离",
    "description": "本关遭遇战中必须全程贴着一位队友（他去哪里你去哪里）",
    "weight": 0.0416,
    "num": 1
}, {
    "id": 8,
    "name": "双人成行",
    "description": "本关遭遇战中你可以指定一名队友与你进行生死绑定，你们共用一条生命（一失两命）",
    "weight": 0.0416,
    "num": 1
}, {
    "id": 9,
    "name": "怠惰",
    "description": "本次遭遇战中玩家使用与上一次遭遇战相同的配枪（上一关拿什么枪，这关也拿什么枪）",
    "weight": 0.0416,
    "num": 1
}, {
    "id": 10,
    "name": "模仿",
    "description": "本关遭遇战中你必须使用另一名玩家的分支属性以及武器类型（他用什么你用什么）",
    "weight": 0.0416,
    "num": 1
}, {
    "id": 11,
    "name": "沉默",
    "description": "本次遭遇战中无法使用语音和打字聊天（可以通过开枪，做动作交流）",
    "weight": 0.0416,
    "num": 1
}, {
    "id": 12,
    "name": "静音",
    "description": "本次遭遇战中无法听到游戏内声音以及游戏语音（只能说话，听不见队友说话）",
    "weight": 0.0416,
    "num": 1
}, {
    "id": 13,
    "name": "死亡年轮",
    "description": "本次遭遇战中鼠标灵敏度调整为 400，游戏内设置鼠标灵敏度为 10 （视角移动缓慢）",
    "weight": 0.0416,
    "num": 1
}, {
    "id": 14,
    "name": "高效",
    "description": "本次遭遇战中子弹打光之前不能换弹（清空弹夹，不能按R）",
    "weight": 0.0416,
    "num": 1
}, {
    "id": 15,
    "name": "退环境",
    "description": "本次遭遇战中你可以选择一把紫色武器，但它必须选择退环境的（不能升光的武器）",
    "weight": 0.0416,
    "num": 1
}, {
    "id": 16,
    "name": "破碎",
    "description": "本次遭遇战中禁止使用异域武器（不能使用金枪）",
    "weight": 0.0416,
    "num": 1
}, {
    "id": 17,
    "name": "禁锢",
    "description": "本次遭遇战中开始30秒内不能移动（原地不动30秒）",
    "weight": 0.0416,
    "num": 1
}, {
    "id": 18,
    "name": "近视",
    "description": "本次遭遇战中将画面渲染度降至 25%（画质降低）",
    "weight": 0.0416,
    "num": 1
}, {
    "id": 19,
    "name": "黑暗纪元",
    "description": "本关遭遇战中只能使用白色武器（白弹武器）",
    "weight": 0.0416,
    "num": 1
}, {
    "id": 20,
    "name": "直行",
    "description": "本次遭遇战中只能使用 W 键进行移动（ASD 删除）",
    "weight": 0.0416,
    "num": 1
}, {
    "id": 21,
    "name": "保护目标",
    "description": "本次遭遇战中不能死亡，否则团灭（保护目标）",
    "weight": 0.0416,
    "num": 1
}, {
    "id": 22,
    "name": "沙兵现身",
    "description": "本遭遇战获得一把任意类型偃月，但你需要指定一人来给你下达攻击指令，且只能使用偃月武器",
    "weight": 0.0416,
    "num": 1
}, {
    "id": 23,
    "name": "极速视角",
    "description": "本次遭遇战中鼠标灵敏度调整为最高，游戏内设置鼠标灵敏度为 20（视角移动超级快）",
    "weight": 0.0416,
    "num": 1
}, {
    "id": 24,
    "name": "玉玉症",
    "description": "本次遭遇战中开麦但是可以选择不说话，但是必须想方设法紫砂（只能紫砂一次，生命只有一次），被队友发现紫砂意图后停止，如没死成，30s可以继续紫砂",
    "weight": 0.0416,
    "num": 1
}];

// 全局 DEBUFF 列表
// -----------------------------------------------------------------------------------------------
let allDebuff = [{
    "id": 1,
    "name": "光能消散",
    "description": "本关遭遇战只有十分钟时间完成本次遭遇战，否则团灭",
    "weight": 0.0476
}, {
    "id": 2,
    "name": "全属性",
    "description": "本关遭遇战所有玩家必须使用5种不同的分支",
    "weight": 0.0476
}, {
    "id": 3,
    "name": "饥荒",
    "description": "本关遭遇战无法插旗，获取子弹的唯一方式是拾取敌人掉落的子弹",
    "weight": 0.0476
}, {
    "id": 4,
    "name": "拥抱暗影",
    "description": "本关遭遇战全体玩家必须使用暗影分支",
    "weight": 0.0476
}, {
    "id": 5,
    "name": "敬若神明",
    "description": "本关遭遇战不能使用易伤效果，例如神性/推推炮/虚空箭等",
    "weight": 0.0476
}, {
    "id": 6,
    "name": "沙克斯的挑战",
    "description": "本关遭遇战全体玩家必须携带一把斥候步枪/脉冲步枪/手炮武器",
    "weight": 0.0476
}, {
    "id": 7,
    "name": "单核",
    "description": "本关遭遇战输出时只能使用一种武器，不能切换其他武器",
    "weight": 0.0476
}, {
    "id": 8,
    "name": "强手裂颅",
    "description": "本关遭遇战勇士不能眩晕，只能强杀",
    "weight": 0.0476
}, {
    "id": 9,
    "name": "冰冷前线",
    "description": "本次遭遇战清怪位玩家必须全程贴近刷怪口",
    "weight": 0.0476
}, {
    "id": 10,
    "name": "无念",
    "description": "本关遭遇战关闭游戏内的 HUD （关闭UI）",
    "weight": 0.0476
}, {
    "id": 11,
    "name": "人口锐减",
    "description": "本关遭遇战机制只允许三人完成，输出阶段不限制（可选）",
    "weight": 0.0476
}, {
    "id": 12,
    "name": "感到压力",
    "description": "本关遭遇战火力战队队长每隔三分钟随机踢出一名玩家，被踢出的玩家可以重新加入队伍（可选）",
    "weight": 0.0476
}, {
    "id": 13,
    "name": "请勿插手",
    "description": "本关遭遇战机制只允许四人完成，输出阶段不限制",
    "weight": 0.0476
}, {
    "id": 14,
    "name": "无暇至高天",
    "description": "本关遭遇战无法使用复活币，既有人死亡则无法复活",
    "weight": 0.0476
}, {
    "id": 15,
    "name": "冥冥低语",
    "description": "本关遭遇战播放大悲咒音乐，并完成本次遭遇战",
    "weight": 0.0476
}, {
    "id": 16,
    "name": "全面爆发",
    "description": "本关遭遇战必须第一时间使用已充能的所有技能（能释放技能的玩家）",
    "weight": 0.0476
}, {
    "id": 17,
    "name": "多一条命",
    "description": "本关遭遇战只能使用一次复活币",
    "weight": 0.0476
}, {
    "id": 18,
    "name": "无限火力",
    "description": "本关遭遇战中获取所有技能使用权，但是使用技能的时候必须喊出技能名称，也可以不使用技能",
    "weight": 0.0476
}, {
    "id": 19,
    "name": "宁静",
    "description": "本次遭遇战不能使用语音软件，可以文字或动作进行沟通",
    "weight": 0.0476
}, {
    "id": 20,
    "name": "残缺光能",
    "description": "本关遭遇战中获取所有技能使用权，但是每一个技能只能使用一次，不包括职业技能",
    "weight": 0.0476
}, {
    "id": 21,
    "name": "暗影腐蚀",
    "description": "本关遭遇战中无法使用技能，包括职业技能",
    "weight": 0.0476
}];

let allDebuffDescription = "";

// 设置 DEBUFF 列表信息
function setAllDebuffRollList() {
    // BUFF 显示数量
    let lotteryCount = 100;
    // 添加 全局 DEBUFF 信息
    for (let i = 0; i < lotteryCount; i++) {
        let lotterys = lottery(allDebuff);
        $(".all-debuff-roll-list").append("<h1 class='all-debuff-text'>" + lotterys.name + "</h1>");
        if (i == lotteryCount - 7) {
            allDebuffDescription = lotterys.description;
        }
    }
}
// 重置 DEBUFF 列表信息
function resetAllDebuffRollList(allDebuffRoll) {
    if (allDebuffRoll) {
        $(".all-debuff-roll-list h1").remove();
        $(".all-debuff-roll-list").css({
            "transform": "translateY(-4px)",
            "transition": "none"
        });
        $(".all-debuff-description .all-debuff-description-text").text("");

        setAllDebuffRollList();
    }
}
// 抽奖
function rollAllDebuffList(allDebuffRoll, outTime) {
    if (!allDebuffRoll) {
        // 倒数第 7 个
        $(".all-debuff-roll-list").css({
            // (count - (5 - 1 + 7)) * 56
            "transform": "translateY(-" + (100 - (5 - 1 + 7)) * 56 + "px)",
            "transition": "all 10s cubic-bezier(0.1, 0.4, 0.25, 1)"
        });

        setTimeout(function () {
            $(".all-debuff-description").addClass("all-debuff-animation");
            $(".all-debuff-description .all-debuff-description-text").text(allDebuffDescription);
        }, outTime - 500);

        setTimeout(function () {
            $(".all-debuff-description").removeClass("all-debuff-animation");
        }, outTime);
    }
}

