import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { LoginDto } from './models/dtos/login.dto';
import { NewUserDto } from './models/dtos/new-user.dto';
import { ValidateUserPropertyValueDto } from './models/dtos/validate-user-property-value.dto';
import { LoggedUserResponseDto } from './models/dtos/responses/logged-user.response.dto';
import { ExistReponseDto } from './models/dtos/responses/exist.response.dto';

@Injectable()
export class UserService {
  private usersEndpoint = `${environment.webApiEndPoint}users/`;

  constructor(private http: HttpClient) {}

  loginUser(loginDto: LoginDto): Observable<LoggedUserResponseDto> {
    return this.http.post<LoggedUserResponseDto>(`${this.usersEndpoint}login`, loginDto);
  }

  registerUser(newUserDto: NewUserDto): Observable<LoggedUserResponseDto> {
    return this.http.post<LoggedUserResponseDto>(this.usersEndpoint, newUserDto);
  }

  validatePropertyValue(validateUserPropertyValueDto: ValidateUserPropertyValueDto): Observable<ExistReponseDto> {
    return this.http.get<ExistReponseDto>(`${this.usersEndpoint}validate`, {
      params: JSON.parse(JSON.stringify(validateUserPropertyValueDto)),
    });
  }
}
