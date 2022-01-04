
vl = prompt("Nhập điểm Vật lý");
hh = prompt("Nhập điểm Hóa học");
sh = prompt("Nhập điểm Sinh học");
vl1 = parseInt(vl);
hh1 = parseInt(hh);
sh1 = parseInt(sh);
sum = vl1 + hh1 + sh1;
av = sum/3;
    document.write("Điểm Vật lý: " + vl1);
    document.write("<br/>");
    document.write("Điểm Hóa học: " + hh1);
    document.write("<br/>");
    document.write("Điểm Sinh học: " + sh1);
    document.write("<br/>");
    document.write("Điểm trung bình các môn: " + av);
    document.write("<br/>");
    document.write("Tổng điểm các môn: " + sum);
