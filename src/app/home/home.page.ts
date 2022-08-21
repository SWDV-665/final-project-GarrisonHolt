import { Component } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {AddNewTaskPage} from "../add-new-task/add-new-task.page";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  todoList = [];
  today: number = Date.now();

  constructor(public modalCtrl: ModalController) {
  }

  //Adding a task function to the homepage
  async addTask() {
    const modal = await this.modalCtrl.create({
      component: AddNewTaskPage
    });

    modal.onDidDismiss().then(newTaskObj => {
      console.log(newTaskObj);
      this.todoList.push(newTaskObj.data);
    });
    return await modal.present();
  }

  //Deleteing the item by splicing the index
  delete(index) {
    this.todoList.splice(index,1);
  }

  //This function utilizes the same concept as the delete function
  complete(index) {
    this.todoList.splice(index, 1);
  }
}
