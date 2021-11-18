import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../file-upload.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-upload-file-form',
  templateUrl: './upload-file-form.component.html',
  styleUrls: ['./upload-file-form.component.css']
})
export class UploadFileFormComponent implements OnInit {

  fileName="No File Chosen...";
  name="";
  subject="";
  keywords="";
  title="";
  formData = new FormData();
  constructor(private uploadFileService: FileUploadService) { }

  ngOnInit(): void {
  }

  onFileUpload(event: any){
    const file:File = event.target.files[0];

        if (file) {

            this.fileName = file.name;


            this.formData.append("file", file);

            
            
        }
  }
  onSubmit(){
    this.formData.append("author", this.name);
    this.formData.append("title", this.title);
    this.formData.append("keywords", this.keywords);
    this.formData.append("subject", this.subject);
    this.uploadFileService.uploadTxtFile(this.formData).subscribe(data=>{
      if (data){
        Swal.fire(
          'Good job!',
          'PDF Generated!',
          'success'
        )
      }
    });
  }
}
