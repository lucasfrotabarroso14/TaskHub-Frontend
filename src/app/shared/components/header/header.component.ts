import { Component } from '@angular/core';
import { AuthService } from 'src/app/pages/login-page/auth.service';
import { ConfirmationService, MessageService,ConfirmEventType } from 'primeng/api';
import { TaskService } from 'src/app/tasks/task.service';
import { Task } from 'src/app/tasks/task-interface';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    private authService : AuthService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private  taskService : TaskService){}

  displayAddTaskDialog !: boolean 
  logout !: boolean 

  updateTaskList() {
    this.taskService.getTasks().subscribe((tasksFromServer: Task[]) => {
      //deixei reativo
    });
}



  showDialog(){
    this.displayAddTaskDialog = !this.displayAddTaskDialog
    console.log(this.displayAddTaskDialog);
    
  }
  confirmLogout(){
    this.logout = !this.logout
  }
  onLogout(){

    this.authService.logout()

  }
  
  confirm1() {
    this.confirmationService.confirm({
        accept: () => {
            this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
        },
        reject: (type: ConfirmEventType) => {
            switch (type) {
                case ConfirmEventType.REJECT:
                    this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
                    break;
                case ConfirmEventType.CANCEL:
                    this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled' });
                    break;
            }
        }
    });

    

  
 
  
    
    
}
}
