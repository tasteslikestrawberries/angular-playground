import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { Task } from './task-model';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task-service',
  templateUrl: './task-service.component.html',
  styleUrls: ['./task-service.component.scss'],
  standalone: true,
  imports: [FormsModule, RouterLink, TaskDetailsComponent],
})
export class TaskServiceComponent implements OnInit {
  private taskService = inject(TaskService);
  
  task: Task = {
    name: '',
    description: '',
  };

  submitted = false;

  tasks?: Task[];
  currentTask: Task = {};
  currentIndex = -1;
  name = '';

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getAll().subscribe(
      (data) => {
        this.tasks = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      },
    );
  }

  refreshList(): void {
    this.getTasks();
    this.currentTask = {};
    this.currentIndex = -1;
  }

  setActiveTask(task: Task, index: number): void {
    this.currentTask = task;
    this.currentIndex = index;
  }

  removeAllTasks(): void {
    this.taskService.deleteAll().subscribe(
      (response) => {
        console.log(response);
        this.refreshList();
      },
      (error) => {
        console.log(error);
      },
    );
  }

  searchName(): void {
    this.currentTask = {};
    this.currentIndex = -1;

    this.taskService.findByName(this.name).subscribe(
      (data) => {
        this.tasks = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      },
    );
  }

  // submit new task
  onSubmit(): void {
    const data = {
      name: this.task.name,
      description: this.task.description,
    };

    this.taskService.create(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
      },
      (error) => {
        console.log(error);
      },
    );
  }

  newTask(): void {
    this.submitted = false;
    this.task = {
      name: '',
      description: '',
    };
  }
}
