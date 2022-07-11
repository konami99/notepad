import Head from 'next/head';
import { Controller, useForm } from 'react-hook-form';
import Input from "@material-ui/core/Input";
import * as React from 'react';
import { Box } from "@mui/system";

export default function create() {
  const { register, control, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="container">
      <Head>
        <title>New Note</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box component="span" sx={{ display: 'block' }}>
            <Controller
              name='nameRequired'
              control={control}
              rules={{ required: true }}
              render={({ field }) => <Input{...field} />}
            />
            {errors.nameRequired && <span>Name is required</span>}
          </Box>  
          <Box component="span" sx={{ display: 'block' }}>
            <Controller
              name='emailRequired'
              control={control}
              rules={{ required: true }}
              render={({ field }) => <Input{...field} />}
            />
            {errors.emailRequired && <span>Email is required</span>}
          </Box>
          <Box component="span" sx={{ display: 'block' }}>
            <input type="submit" />
          </Box>
        </form>
      </main>
    </div>
  )
}