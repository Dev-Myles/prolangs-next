import Layout from '../components/store/Layout';
import prisma from '../lib/prisma.ts';
export default function Store({ jsonData }) {
  return <Layout props={jsonData}></Layout>;
}

export const getServerSideProps = async () => {
  const shirtsRes = await prisma.shirt.findMany();
  const hitchesRes = await prisma.hitch.findMany();
  const signsRes = await prisma.sign.findMany();
  const jsonData = {
    shirtsRes,
    hitchesRes,
    signsRes,
  };

  return { props: { jsonData } };
};
