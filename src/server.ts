import app from "./app";
import { Database } from "./database/database";

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is listing on port: ${PORT}`);
});
