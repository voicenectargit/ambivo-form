import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FileTypeService {
  fileNames = new Map();
  constructor() {}
}
