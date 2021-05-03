<!DOCTYPE html>
<head>
<link href="ciao.css" rel="stylesheet" type="text/css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="funzioni.js" type="text/javascript"></script>
</head>

<body onload="loadallelement()">
<center>

<form id="listaemployee">

<div class="ciao">
Manage <p class="imp">Employees</p>
<a onclick="deletepls()" >
<input type="image" src="Delete.jpg"  height="35x" style="margin-left:23rem"></input><h1 class="bottone">Delete</h1></a>
<a onclick="addpls()">
<input type="image" src="Add.jpg" height="35px"></input><h1 class="bottone">  Add New Employee</h1></a>
</div>
<br><br>


<div>
<table style=" width: 100%;" id="itemscontainer">
<tr class="tabella">
<td><input onClick="checkboxall(this)" id="checkboxall" type="checkbox"></td>
<td>Name</td>
<td>Email</td>
<td>Address</td>
<td>Phone</td>
<td>Actions</td>
</tr>
</table>
</div>
</form>


<form id="addemployee">
<div class="ciao">
Manage <p class="imp">Employees</p>
</div>


<div>
<table>
<tr>
<td><input id="nameform" type="text" ></input></td>
<td><input id="emailform" type="text" ></input></td>
<td><input id="addressform" type="text" ></input></td>
<td><input id="phoneform" type="text" ></input></td>
<td><input type="image" src="Modifica.png" height="35px"></input></td>
<td><input type="image" src="Canc.jpg" height="35px"></input></td>
<a onclick="sendaddemployee()" style="margin-left: 1%">
<img src="Add1.jpg" height="35px"></a>
</tr>
</table>

</div>
</form>

</center>
</body>
</html>