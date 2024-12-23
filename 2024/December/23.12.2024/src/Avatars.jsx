import * as React from "react";
import { Avatar } from "@mui/material";
import Stack from "@mui/material/Stack";

const DUMMY_USERS = [
  {
    name: "Remy Sharp",
    url: "ttps://cloudcommercepro.com/wp-content/uploads/2022/06/dummy-customer.jpg",
  },
  {
    name: "Travis Howard",
    url: "ttps://cibs.lu/wp-content/uploads/2014/02/client-11.jpg",
  },
  {
    name: "Cindy Baker",
    url: "ttps://haamc.com/wp-content/uploads/2023/09/client-dummy-Google-Search-1.png",
  },
];

export default function ImageAvatars() {
  const getIntials = (fullname) => {
    const splittedName = fullname.split(" ")
    
    let shortName = ""
    splittedName.forEach((str) => {
        shortName += str[0]
    })

    return shortName
  };

  return (
    <Stack direction="row" spacing={2}>
      {DUMMY_USERS.map((user) => (
        <Avatar key={user.name} alt={user.name} src={user.url}>
          {getIntials(user.name)}
        </Avatar>
      ))}
    </Stack>
  );
}
