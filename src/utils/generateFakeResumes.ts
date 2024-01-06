import { faker } from '@faker-js/faker';

export default function generateFakeResumes(quantity = 10) {
  const resumes = [...Array(quantity).keys()].map(() => {
    return {};
  });

  return resumes;
}
