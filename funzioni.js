var employee;
class Employer {
    constructor(name, email, address, phone) {
        this.name = name;
        this.email = email;
        this.address = address;
        this.phone = phone;
    }
};

function onload() {
    document.getElementById("addemployee").style.display = "none";
    document.getElementById("listaemployee").style.display = "block";
    requestall();
}

function delete(element) {
    try {
        if (element == undefined) {
            var checkboxes = document.getElementsByName('checkbox');
            for (var i = 0, n = checkboxes.length; i < n; i++)
                if (checkboxes[i].checked == true)
                    sendremovethis(checkboxes[i].id);
            location.reload();
        } else {
            if (confirm("I\'m sure about what I\'m doing")) {
                sendremovethis(element);
                location.reload();
				}
        }
    } catch (Exception) {
        
    }
}

function add(element) {
    try {
        if (element == undefined) {
            document.getElementById("listaemployee").style.display = "none";
            document.getElementById("addemployee").style.display = "block";
        } else {
            alert(element);
            var employer = new Employer;
            employer.name = prompt("Name: ");
            employer.email = prompt("email: ");
            employer.address = prompt("address: ");
            employer.phone = prompt("Phone: ");
            sendupdatethis(employer, element);
        }
    } catch (Exception) {
       
    }
}

function mainadd(employer, elem) {
    var html = '<td><input type="checkbox" name="checkbox"  id="' + elem + '"></td><td id="' + elem + '" name="name"><p>' + employer.name + '</p></td><td id="' + elem + '" name="email"><p>' + employer.email + '</p></td><td id="' + elem + '" name="address"><p>' + employer.address + '</p></td><td id="' + elem + '" name="phone"><p>' + employer.phone + '</p></td>';
    html = html + '<td><img onClick="addpls(this.id)" src="Modifica.png"  height: 35px;" id="' + elem + '"></td>';
    html = html + '<td><img onClick="deletepls(this.id)" src="Delete.jpg" height: 35px;" id="' + elem + '"></td>';
    const row = document.createElement('tr');
    row.id = (elem);
    row.innerHTML = html;
    document.getElementById('itemscontainer').appendChild(row);
    elem++;
}

function checkboxall(checkbox) {
    var checkboxes = document.getElementsByName('checkbox'); //ByName make an array of checkbox elements in html document  
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        checkboxes[i].checked = maincheckbox.checked;
    }
}

function requestall() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            resposeall(this.responseText);
        }
    };
    request.open("GET", "http://localhost:8080/api/tutorial/1.0/employees", true);
    request.setRequestHeader("Accept", "*/*");
    request.send();
}

function sendaddemployee() {
    employee++;
    var dati = {
        "employeeId": employee,
        "name": document.getElementById("nameform").value,
        "email": document.getElementById("emailform").value,
        "address": document.getElementById("addressform").value,
        "phone": document.getElementById("phoneform").value
    };
    $.ajax({
        url: 'http://localhost:8080/api/tutorial/1.0/employees/',
        type: 'post',
        data: JSON.stringify(dati),
        contentType: 'application/json',
        success: function(data, textstatus, jQxhr) {
            location.reload();
        }
    });
}

function sendremovethis(id) {
    $.ajax({
        url: "http://localhost:8080/api/tutorial/1.0/employees/" + id,
        type: 'delete',
        contentType: 'String',
        success: function(data, textstatus, jQxhr) {

        }
    });
}

function sendupdatethis(employer, id) {
    var dati = {
        "employeeId": id,
        "name": employer.name,
        "email": employer.email,
        "address": employer.address,
        "phone": employer.phone
    };
    $.ajax({
        url: 'http://localhost:8080/api/tutorial/1.0/employees/' + id,
        type: 'put',
        data: JSON.stringify(dati),
        contentType: 'application/json',
        success: function(data, textstatus, jQxhr) {
            location.reload();
        }
    });
}

function resposeall(json) {
    var employer = JSON.parse(json);
    for (var i = 0; i < employer.length; i = i + 1) {
        employee = employer[i].employeeId;
        mainadd(employer[i], employer[i].employeeId);
    }
}

function setjson(value) {
    json = value;
}