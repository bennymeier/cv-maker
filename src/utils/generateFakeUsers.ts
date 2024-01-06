import { faker } from '@faker-js/faker';

export default function generateFakeUsers(quantity = 10) {
  const users = [...Array(quantity).keys()].map(() => {
    return {
      email: faker.internet.email(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      currentPosition: faker.person.jobTitle(),
      city: faker.location.city(),
      country: faker.location.country(),
      website: faker.internet.url(),
      gender: faker.person.gender(),
      linkedin: faker.internet.url(),
      postalCode: faker.location.zipCode(),
      streetName: faker.location.street(),
      nationality: faker.location.county(),
      phoneNumber: faker.phone.number(),
      countryCode: faker.location.countryCode(),
      dateOfBirth: faker.date.birthdate(),
      houseNumber: faker.location.buildingNumber(),
      placeOfBirth: faker.location.city(),
      maritalStatus: 'Single',
      drivingLicenses: 'A, B',
      avatar: {
        image: faker.image.dataUri({ type: 'svg-base64' }),
        filetype: faker.system.fileType(),
        filesize: faker.string.numeric(4),
      },
    };
  });

  return users;
}
