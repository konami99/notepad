import Head from 'next/head';
import { Controller, useForm } from 'react-hook-form';
import Input from "@material-ui/core/Input";
import * as React from 'react';
import { Box } from "@mui/system";
import useSWR from 'swr';



export default function create() {
  const { register, control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      nameRequired: '',
      emailRequired: ''
    }
  });

  const fetcher = (url) => fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email: postData.emailRequired, name: postData.nameRequired})
  }).then((res) => res.json());

  const [postData, setPostData] = React.useState(null);

  const { data, error } = useSWR(
    postData ? `${process.env.NEXT_PUBLIC_EXPRESS_ENDPOINT}/api/users` : null,
    fetcher
  );

  const onSubmit = data => {
    console.log(data);
    setPostData(data);
  };

  if (error) return "An error has occurred.";
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