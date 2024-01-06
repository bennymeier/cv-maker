'use client';
import { UserDocument } from '@/models/User';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  Image,
} from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';

type Props = {
  users: UserDocument[];
};
export default function UserTable({ users }: Props) {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Avatar</Th>
            <Th>ID</Th>
            <Th>E-Mail</Th>
            <Th>Firstname</Th>
            <Th>Lastname</Th>
            <Th>Position</Th>
            <Th>Country</Th>
            <Th>Website</Th>
            <Th>Gender</Th>
            <Th>LinkedIn</Th>
            <Th>Street</Th>
            <Th>ZIP</Th>
            <Th>City</Th>
            <Th>Nationality</Th>
            <Th>Place of Birth</Th>
            <Th>Date of Birth</Th>
            <Th>Marital Status</Th>
            <Th>Driving Licenses</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => {
            const {
              _id,
              avatar,
              email,
              firstName,
              lastName,
              currentPosition,
              country,
              website,
              gender,
              linkedin,
              streetName,
              postalCode,
              city,
              nationality,
              placeOfBirth,
              dateOfBirth,
              maritalStatus,
              drivingLicenses,
            } = user;
            return (
              <Tr key={_id}>
                <Th>
                  <Image
                    alt={`Profile Photo of ${firstName} ${lastName}`}
                    src={avatar.image}
                  />
                </Th>
                <Th>
                  <Link color="cornflowerblue" href={`/users/${_id}`}>
                    {_id}
                  </Link>
                </Th>
                <Th>{email}</Th>
                <Th>{firstName}</Th>
                <Th>{lastName}</Th>
                <Th>{currentPosition}</Th>
                <Th>{country}</Th>
                <Th>{website}</Th>
                <Th>{gender}</Th>
                <Th>{linkedin}</Th>
                <Th>{streetName}</Th>
                <Th>{postalCode}</Th>
                <Th>{city}</Th>
                <Th>{nationality}</Th>
                <Th>{placeOfBirth}</Th>
                <Th>{dateOfBirth}</Th>
                <Th>{maritalStatus}</Th>
                <Th>{drivingLicenses}</Th>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
