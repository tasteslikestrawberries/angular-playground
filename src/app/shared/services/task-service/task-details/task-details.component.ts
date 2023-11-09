import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../task-model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss'],
  standalone: true,
  imports: [FormsModule],
})
export class TaskDetailsComponent implements OnInit {
  private taskService = inject(TaskService);
  private route = inject(ActivatedRoute);
  isAuthenticated = false;
  currentTask: Task = {
    name: '',
    description: '',
  };

  message = '';

  ngOnInit(): void {
    this.message = '';
    this.getTask(this.route.snapshot.params.id);
  }

  getTask(id: string): void {
    this.taskService.get(id).subscribe(
      (data) => {
        this.currentTask = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      },
    );
  }

  updateTask(): void {
    this.message = '';

    this.taskService.update(this.currentTask.id, this.currentTask).subscribe(
      (response) => {
        console.log(response);
        this.message = response.message
          ? response.message
          : 'This task was updated successfully!';
      },
      (error) => {
        console.log(error);
      },
    );
  }

  deleteTask(): void {
    this.taskService.delete(this.currentTask.id).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      },
    );
  }
}
