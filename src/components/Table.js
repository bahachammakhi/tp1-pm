import React from "react";
const ppl = [
  { name: "Ali", email: "ali@gmail.com", dtn: "12/09/1999" },
  { name: "Mohamed", email: "ali@gmail.com", dtn: "12/09/1999" },
  { name: "Nadia", email: "ali@gmail.com", dtn: "12/09/1999" }
];
const pplAffiche = ppl.map(el => {
  return (
    <tr>
      <th scope="col">
        {" "}
        <i class="far fa-user mr-1"></i>
        {el.name}
      </th>
      <th scope="col">
        <i class="fas fa-envelope-square mr-1"></i>
        {el.email}
      </th>
      <th scope="col">{el.dtn}</th>
    </tr>
  );
});
const Table = () => {
  return (
    <div class="table-responsive table-striped">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Nom</th>
            <th scope="col">Email</th>
            <th scope="col">Date de naissance</th>
          </tr>
        </thead>
        <tbody>{pplAffiche}</tbody>
      </table>
    </div>
  );
};
export default Table;
