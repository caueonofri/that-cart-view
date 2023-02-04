import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { User, ServerUser } from 'src/helpers/users';

interface dummyUsersConfig {
users: Array<ServerUser>,
total: number,
skip: number,
limit: number
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  usersUrl: string = 'https://dummyjson.com/users';
  getAll() {
    const userList: Array<User> = [];
    this.http.get<dummyUsersConfig>(this.usersUrl).pipe(
      map(response =>
        response.users.map( user => {
          userList.push({
            name: `${user.firstName} ${user.lastName}`,
            id: user.id,
            password: user.password,
            isAdmin: user.bloodGroup == "O+"
          })
        })
      )
    )
    return userList;
  }
}
