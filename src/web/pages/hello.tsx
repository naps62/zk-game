import { FC } from "react";
import { useForm } from "react-hook-form";

const Hello: FC = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("x")} />
        <input {...register("y")} />
        <input type="submit" />
      </form>
    </div>
  );
};
