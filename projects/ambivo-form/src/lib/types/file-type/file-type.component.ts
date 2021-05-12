import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { SnackbarService } from '../../snackbar/snackbar.service';
import { FileTypeService } from './file-type.service';

@Component({
  selector: 'file-type',
  templateUrl: './file-type.component.html',
  styleUrls: ['./file-type.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileTypeComponent extends FieldType {
  constructor(
    private cd: ChangeDetectorRef,
    private snackbar: SnackbarService,
    private fileTypeService: FileTypeService
  ) {
    super();
  }

  get fileName(): string {
    return this.fileTypeService.fileNames.get(this.field.key);
  }

  setFile(event: any): void {
    const maxSize = 500000;
    const fileList: FileList = event.target.files;
    const file: File = FileList ? fileList[0] : undefined;

    if (file) {
      if (file.size > maxSize) {
        this.snackbar.show(`Maximum file size is ${maxSize}KB`);
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        this.fileTypeService.fileNames.set(this.field.key, file.name);
        this.formControl.setValue(reader.result);
        this.cd.detectChanges();
      };

      reader.onerror = () =>
        this.snackbar.show(reader.error.message, {
          type: 'error',
          title: 'Error'
        });
      reader.readAsDataURL(file);
    }
  }
}
