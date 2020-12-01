import { Component } from '@angular/core';

@Component({
    selector: "app-basics",
    templateUrl: './basics.component.html',
    styleUrls: ['./basics.component.css']
})

export class BasicsComponent {


    status_number: number = 1;
    status: string = "online"
    but = "Enable"
    value
    bool = true
    data = "hi"
    array = ["online", "offline"]
    color = "red"


    butStatus() {
        this.but = this.but == "Enable" ? "Disable" : "Enable";
        this.bool = this.bool ? false : true
    }

    changeStatus() {
        this.status = this.status == "offline" ? "online" : "offline";
        this.status_number = this.status_number ? 0 : 1;
    }
    // event binding input data
    onData(event: any) {
        this.value = event.target.value
    }


    getColor() {
        return this.color == "red" ? "green" : "red"
    }

    onColor() {
        this.color = this.color == "red" ? "green" : "red"
        console.log(this.color)
        return this.color

    }

    onAddData(data){
        console.log(data.value)
    }
}