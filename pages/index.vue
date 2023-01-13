<script setup>
const inputDesc = ref('');
const inputURL = ref('');
const val = reactive([{ desc: '', url: '' }]);
// const { data: links } = useFetch('/api');
const { dataLinks, createLink } = useLinks();
// console.log(dataLinks.value);

const onSubmit = () => {
  // console.log(val.desc, val.url);
  const values = {
    url: val.url,
    description: val.desc,
  };
  if (values.url !== '' && values.description !== '') {
    createLink(values);
    resetForm();
    // const { data } = await useFetch('/api', { method: 'post', body: values });
    // await refreshNuxtData();
  }
};
const resetForm = () => {
  val.url = '';
  val.desc = '';
};
</script>
<template>
  <div class="">
    <Html>
      <Head>
        <Title>{{ dataLinks[0]?.description }}</Title>
      </Head>
    </Html>

    <div class="p-6">
      <div class="flex w-1/2">
        <div class="out_l w-1/2">
          <el-input v-model="val.desc" placeholder="Please input desctiptions" />
          <el-input v-model="val.url" placeholder="Please input url" />
          <el-button type="primary" @click="onSubmit">submit</el-button>
        </div>
        <div class="out_r w-1/2">
          <h1 class="text-3xl font-bold">Prisma</h1>
          <ul>
            <li v-for="link in dataLinks" :key="link.id">
              {{ link.url }} : {{ link.description }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/scss/form_reset';
</style>
