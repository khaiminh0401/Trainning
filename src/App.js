import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  let data = [
    {
      "id": 2,
      "name": "Hồ Hoàng Khang",
      "address": "Quận 3",
      "birthday": "2003-01-01T17:00:00.000+00:00",
      "email": "khang@gmail.com",
      "author": {
        "id": 2,
        "text": "Nhân viên"
      }
    },
    {
      "id": 3,
      "name": "Ngô Quốc Cường",
      "address": "Quận Phú Nhuận",
      "birthday": "2003-01-02T17:00:00.000+00:00",
      "email": "cuong@gmail.com",
      "author": {
        "id": 3,
        "text": "Quản lí"
      }
    },
    {
      "id": 4,
      "name": "Nguyễn Thị Ngọc Hân",
      "address": "Tân Bình",
      "birthday": "2003-01-03T17:00:00.000+00:00",
      "email": "han@gmail.com",
      "author": {
        "id": 1,
        "text": "Giám đốc"
      }
    },
    {
      "id": 5,
      "name": "Bùi Vũ Thiên Ân",
      "address": "Quận 12",
      "birthday": "2003-01-04T17:00:00.000+00:00",
      "email": "an@gmail.com",
      "author": {
        "id": 2,
        "text": "Nhân viên"
      }
    },
    {
      "id": 1,
      "name": "Bàng Thanh Lợn",
      "address": "Quận 1",
      "birthday": null,
      "email": "son@gmail.com",
      "author": {
        "id": 1,
        "text": "Giám đốc"
      }
    },
    {
      "id": 6,
      "name": "Bàng Thanh Sơn",
      "address": "Quận 1",
      "birthday": null,
      "email": "son@gmail.com",
      "author": {
        "id": 1,
        "text": "Giám đốc"
      }
    }
  ];


  data = data.map(s => {
    return (<tr className="" key={s.id}>
      <td scope="row">{s.id}</td>
      <td>{s.name}</td>
      <td>{s.address}</td>
    </tr>)
  })
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
      <div className="row">
        <div className="col-7">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Address</th>
                </tr>
              </thead>
              <tbody >
              {data}

              </tbody>
            </table>
          </div>


        </div>
        <div className="col-5">
          <div class="container">
            <form>
              <div className="mb-3 row">
                <label htmlFor="inputName" className="col-4 col-form-label">id</label>
                <div className="col-8">
                  <input type="text" className="form-control" name="inputName" id="inputName" placeholder="id" />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="inputName" className="col-4 col-form-label">Name</label>
                <div className="col-8">
                  <input type="text" className="form-control" name="inputName" id="inputName" placeholder="Name" />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="inputName" className="col-4 col-form-label">address</label>
                <div className="col-8">
                  <input type="text" className="form-control" name="inputName" id="inputName" placeholder="address" />
                </div>
              </div>
              <div className="mb-3 row">
                <div className="offset-sm-4 col-sm-8">
                  <button type="submit" className="btn btn-primary">Action</button>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
