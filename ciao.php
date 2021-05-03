<!DOCTYPE html>
<head>
<link href="ciao.css" rel="stylesheet" type="text/css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="funzioni.js" type="text/javascript"></script>
</head>

<body onload="onload()">
<center>

<form id="listaemployee">

<div class="ciao">
Manage <p class="imp">Employees</p>
<a onclick="delete()" >
<input type="image" src="Delete.jpg"  height="35x" style="margin-left:23rem"></input><h1 class="bottone">Delete</h1></a>
<a onclick="add()">
<input type="image" src="Add.jpg" height="35px"></input><h1 class="bottone">  Add New Employee</h1></a>
<input type="image" src="Modifica.png" height="35px"></input>
<input type="image" src="Canc.jpg" height="35px"></input>
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
<div>
<input id="nameform" type="text" ></input>
</div><div>
<input id="emailform" type="text" ></input>
</div><div>
<td><input id="addressform" type="text" ></input>
</div><div>
<td><input id="phoneform" type="text" ></input>
</div><div>
<a onclick="sendaddemployee()" style="margin-left: 3%"><img src="Add1.jpg" height="35px"></a>
</div>
</div>
</form>

</center>
</body>
</html>