import faktory, { JobFunction } from "faktory-worker";

// @ts-ignore
faktory.register("ResizeImage", async ({ id, size }) => {
  console.log('processing');
  console.log(id);
  console.log(size);
});

faktory.work({
  host: process.env.FAKTORY_HOST,
  password: process.env.FAKTORY_PASSWORD
});