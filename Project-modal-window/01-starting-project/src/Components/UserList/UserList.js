import classes from "./UserList.module.css";
import Card from "../UI/Card";

const UserList = (props) => {
  return (
    <div>
      <Card className={classes.users}>
        <ul>
          {props.users.map((user) => (
            <li key={Math.random()}>
              {user.name} is ({user.age}) years old.
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default UserList;
