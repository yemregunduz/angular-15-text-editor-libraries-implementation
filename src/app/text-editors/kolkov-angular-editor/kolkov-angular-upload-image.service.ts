import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { tap, Observable } from 'rxjs';
import { UploadResponse } from '@kolkov/angular-editor';
@Injectable({
  providedIn: 'root',
})
export class KolkovAngularUploadImageService {
  constructor(private httpClient: HttpClient) {}

  uploadImageByAngularEditor(
    file: File
  ): Observable<HttpEvent<UploadResponse>> {
    const url = `http://localhost:8080/upload/image`;
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.httpClient
      .post<UploadResponse>(url, formData, {
        observe: 'events',
      })
      .pipe(tap(console.log));
  }
}
