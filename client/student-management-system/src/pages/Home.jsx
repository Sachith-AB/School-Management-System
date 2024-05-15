import React, { useState, useEffect } from 'react';
import { HiOutlineUserGroup, HiOutlineExclamationCircle } from 'react-icons/hi';
import { Table, Button, Modal, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Home() {
  const [students, setStudents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [deleteStudentId, setDeleteStudentId] = useState('');
  const [searchStudentId, setSearchStudentId] = useState('');
  const [result, setResult] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const getStudents = async () => {
      try {
        const res = await axios.get('http://localhost:4000/api/student/getstudents');
        setStudents(res.data);
        console.log(students)
        
        
      } catch (error) {
        console.log(error);
      }
    };
    getStudents();
  }, []);

  const handleDelete = async () => {
    setShowModal(false);
    try {
      await axios.delete(`http://localhost:4000/api/student/delete/${deleteStudentId}`);
      setStudents((prev) => prev.filter((student) => student._id !== deleteStudentId));
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = async () => {
    setIsSearching(true);
    try {
      const res = await axios.get(`http://localhost:4000/api/student/getstudent/${searchStudentId}`);
      setResult(res.data);
      console.log(result);
    } catch (error) {
      console.log(error.message);
      setResult(null);
    }
  }
  

  return (
    <div className=''>
      <div className='flex flex-col p-3 dark:bg-slate-800 gap-4 md:w-72 w-full rounded-md shadow-md'>
        <div className='flex justify-center gap-4 '>
          <div className=''>
            <h3 className='text-gray-500 text-md uppercase mt-3'>Total Students</h3>
            <p className='text-2xl'>{students.length}</p>
          </div>
          <HiOutlineUserGroup className='bg-green-500 text-white rounded-full text-5xl p-3 shadow-lg' />
        </div>
      </div>

      <div className='flex flex-col w-full shadow-md p-2 rounded-md dark:bg-gray-800'>
        <div className='flex p-3 text-sm font-semibold'>
          <p className='text-center p-2'>All Students</p>

          <TextInput
            type='text'
            value={searchStudentId}
            onChange={(e) => setSearchStudentId(e.target.value)}
            placeholder='Enter Student ID'
          />

          <Button className='bg-blue-500 flex ml-1' type='submit' onClick={handleSubmit}>
            Submit
          </Button>
        </div>
        {isSearching && result && (
          <div className='p-3 mb-4 bg-gray-100 rounded-md shadow-md dark:bg-gray-700'>
            <h4 className='text-lg font-semibold mb-2'>Search Result:</h4>
            <Table hoverable>
              <Table.Head>
                
                <Table.HeadCell>Student Name</Table.HeadCell>
                <Table.HeadCell>Age</Table.HeadCell>
                <Table.HeadCell>Address</Table.HeadCell>
                <Table.HeadCell>Phone No</Table.HeadCell>
                <Table.HeadCell>Gender</Table.HeadCell>
                <Table.HeadCell>Stream</Table.HeadCell>
                <Table.HeadCell>Email</Table.HeadCell>
              </Table.Head>
              <Table.Body>
                <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                  
                  <Table.Cell>{result.user.name}</Table.Cell>
                  <Table.Cell>{result.user.age}</Table.Cell>
                  <Table.Cell>{result.user.address}</Table.Cell>
                  <Table.Cell>{result.user.phoneNumber}</Table.Cell>
                  <Table.Cell>{result.user.gender}</Table.Cell>
                  <Table.Cell>{result.user.scheme}</Table.Cell>
                  <Table.Cell>{result.user.email}</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
        )}


        
         

        {students.length > 0 ? (
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell>Student ID</Table.HeadCell>
              <Table.HeadCell>Student Name</Table.HeadCell>
              <Table.HeadCell>Age</Table.HeadCell>
              <Table.HeadCell>Address</Table.HeadCell>
              <Table.HeadCell>Phone No</Table.HeadCell>
              <Table.HeadCell>Gender</Table.HeadCell>
              <Table.HeadCell>Stream</Table.HeadCell>
              <Table.HeadCell>Email</Table.HeadCell>
              <Table.HeadCell>Edit</Table.HeadCell>
              <Table.HeadCell>Delete</Table.HeadCell>
            </Table.Head>
            {students.map((student) => (
              <Table.Body key={student._id} className='divide-y'>
                <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                  <Table.Cell>{student._id}</Table.Cell>
                  <Table.Cell>{student.name}</Table.Cell>
                  <Table.Cell>{student.age}</Table.Cell>
                  <Table.Cell>{student.address}</Table.Cell>
                  <Table.Cell>{student.phoneNumber}</Table.Cell>
                  <Table.Cell>{student.gender}</Table.Cell>
                  <Table.Cell>{student.scheme}</Table.Cell>
                  <Table.Cell>{student.email}</Table.Cell>
                  <Table.Cell>
                    <Link className='text-green-500 hover:underline' to={`/updatestudent/${student._id}`}>
                      Edit
                    </Link>
                  </Table.Cell>
                  <Table.Cell>
                    <span
                      onClick={() => {
                        setShowModal(true);
                        setDeleteStudentId(student._id);
                      }}
                      className='font-medium text-red-500 hover:underline cursor-pointer'>
                      Delete
                    </span>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            ))}
          </Table>
        ) : (
          <p>No students yet...</p>
        )}

        

        <Modal show={showModal} onClose={() => setShowModal(false)} popupsize='md'>
          <Modal.Header />
          <Modal.Body>
            <div className='text-center'>
              <HiOutlineExclamationCircle
                className='h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto'
              />
              <h3 className='mb-5 text-gray-500 text-lg'>Are you sure you want to delete this student?</h3>
              <div className='flex justify-center gap-4'>
                <Button className='bg-red-600' onClick={handleDelete}>
                  Yes, I'm sure
                </Button>
                <Button color='gray' onClick={() => setShowModal(false)}>
                  No, cancel
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}
