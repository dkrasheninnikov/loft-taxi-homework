import React from "react";
import Card from "../Card";
import CardHeader from "../CardHeader";
import Button from "../Button";
import { pages } from "../../config";
const Profile = ({ setPage }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setPage(pages.MAP);
  };
  return (
    <Card>
      <CardHeader>Профиль</CardHeader>
      <div>Контент раздела Профиль.</div>
      <Button onClick={handleClick}>Закрыть</Button>
    </Card>
  );
};
export default Profile;
