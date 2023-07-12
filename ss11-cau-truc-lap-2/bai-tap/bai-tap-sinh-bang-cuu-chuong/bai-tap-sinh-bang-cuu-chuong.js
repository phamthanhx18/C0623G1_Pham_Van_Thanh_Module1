let table;
table = "<table border='1' cellpadding='15' align='center'>";
for (let i = 1; i <= 10; i++) {
    table = table + "<tr>";
    for (let j = 1; j <= 10; j++) {
        table = table + "<td>"+ i +"*"+ j+ "=" + i * j +"</td>";
    }


}
table = table + "</table>";
document.write(table)


