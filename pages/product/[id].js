import Layout from '../../components/product/Layout';
import prisma from '../../lib/prisma.ts';

export default function ProductPage({ jsonData }) {
  return <Layout props={jsonData} />;
}

export async function getServerSideProps(context) {
  const { id, cata } = context.query;
  let jsonData;
  cata == 'SHIRT'
    ? (jsonData = await prisma.shirt.findUnique({ where: { id } }))
    : cata == 'HITCH'
    ? (jsonData = await prisma.hitch.findUnique({ where: { id } }))
    : cata == 'SIGN'
    ? (jsonData = await prisma.sign.findUnique({ where: { id } }))
    : null;
  return { props: { jsonData } };
}
