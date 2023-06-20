
/*
 * 由@smartmimi编写
 * 原脚本地址：https://raw.githubusercontent.com/smartmimi/conf/master/surge/timecard.js
 * 由@Rabbit-Spec修改
 * 更新日期：2022.06.22
 * 版本：1.0
 -----自用，添加下自己的生日-----
*/

var tlist = {
  1: ["中秋"， "2022-09-10"]，
  2: ["国庆"， "2022-10-01"]，
  3: ["元旦"， "2023-01-01"]，
  4: ["春节"， "2023-01-22"]，
  5: ["元宵"， "2023-02-05"]，
  6: ["清明"， "2023-04-05"]，
  7: ["劳动"， "2023-05-01"]，
 8: ["父亲节"， "2023-06-18"]，
  9: ["端午"， "2023-06-22"]，
  10: ["小王"， "2023-09-10"]，
  11: ["中秋"， "2023-09-29"]，
  12: ["国庆"， "2023-10-01"]，
  13: ["大王"， "2023-12-23"]，
 14: ["圣诞"， "2023-12-25"]，
  15: ["元旦"， "2024-01-01"]
  
};
let tnow = new Date();
let tnowf =
  tnow.getFullYear() + "-" + (tnow.getMonth() + 1) + "-" + tnow.getDate();

/* 计算2个日期相差的天数，不包含今天，如：2016-12-13到2016-12-15，相差2天
 * @param startDateString
 * @param endDateString
 * @returns
 */
function dateDiff(startDateString， endDateString) {
  var separator = "-"; //日期分隔符
  var startDates = startDateString.split(separator);
  var endDates = endDateString.split(separator);
  var startDate = new Date(startDates[0], startDates[1] - 1, startDates[2]);
  var endDate = new Date(endDates[0], endDates[1] - 1, endDates[2]);
  return parseInt(
    (endDate - startDate) / 1000 / 60 / 60 / 24
  )。toString();
}

//计算输入序号对应的时间与现在的天数间隔
function tnumcount(num) {
  let dnum = num;
  return dateDiff(tnowf, tlist[dnum][1]);
}

//获取最接近的日期
function 当前() {
  for (var i = 1; i <= Object.getOwnPropertyNames(tlist)。length; i++) {
    if (Number(dateDiff(tnowf, tlist[i.toString()][1])) >= 0) {
      //console.log("最近的日期是:" + tlist[i.toString()][0]);
      //console.log("列表长度:" + Object.getOwnPropertyNames(tlist).length);
      //console.log("时间差距:" + Number(dateDiff(tnowf, tlist[i.toString()][1])));
      return i;
    }
  }
}

//如果是0天，发送emoji;
let 现在list = 当前();
function 今天(day) {
  let daythis = day;
  if (daythis == "0") {
    datenotice();
    return "🎉🎉";
  } else {
    return daythis+"天";
  }
}

//提醒日当天发送通知
function datenotice() {
  if ($persistentStore.read("timecardpushed") != tlist[现在list][1] && tnow.getHours() >= 6) {
    $persistentStore.write(tlist[现在list][1]， "timecardpushed");
    $notification.post("假日祝福"，""， "今天是" + tlist[现在list][1] + "日 " + tlist[现在list][0] + "   🎉🎉")
  } else if ($persistentStore.read("timecardpushed") == tlist[现在list][1]) {
    //console.log("当日已通知");
  }
}

//>图标依次切换乌龟、兔子、闹钟、礼品盒
function icon_now(num){
  if(num<=7 && num>3 ){
    return "hare"
  }else if(num<=3 && num>0){
    return "timer"
  }else if(num==0){
    return "gift"
  }else{
    return "tortoise"
  }
}

$done({
title:title_random(tnumcount(Number(现在list)))，
icon:icon_now(tnumcount(Number(现在list)))，
content:tlist[现在list][0]+":"+今天(tnumcount(现在list))+","+tlist[Number(现在list) + Number(1)][0] +":"+ tnumcount(Number(现在list) + Number(1))+ "天,"+tlist[Number(现在list) + Number(2)][0]+":"+tnumcount(Number(现在list) + Number(2))+"天"
})

function title_random(num){
  let r = Math.floor((Math.random()*10)+1);
  let dic = {
    1:"再不努力，体制内还能进吗？"，
    2:"坚持住，你是最棒的！"，
    3:"不学习，你还能干啥？"，
    4:"努力，我还能再卷24小时！"，
    5:"今日宜：吃饭饭  忌：减肥"，
    6:"两眼一睁，开始竞争"，
    7:"先苦后甜，以后摸鱼赚老板钱"，
    8:"一起当卷王吧"，
    9:"我就休息一下下，马上就学"，
    10: "苦我心志，劳我筋骨"
  };
  return num==0?"祝节日快乐，万事大吉！":dic[r]
}
