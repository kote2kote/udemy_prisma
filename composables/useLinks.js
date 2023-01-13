// import { PrismaClient } from '@prisma/client';

const useLinks = () => {
  const { data: dataLinks } = useFetch('/api');

  const createLink = async (values) => {
    console.log(values, 'create');
    await $fetch('/api', { method: 'post', body: values });
    // ↓2回実行されてしまう
    // const { data } = await useFetch('/api', { method: 'post', body: values, server: false });
    await refreshNuxtData();

    // const prisma = new PrismaClient();
    // const newLink = await prisma.link.create({
    //   data: values,
    // });
  };
  return {
    dataLinks,
    createLink,
  };
};
export default useLinks;
