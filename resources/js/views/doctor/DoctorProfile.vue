<template>
    
    <div class="flex flex-col items-center max-w-7xl mx-auto p-6">
      <header class="text-center mb-6">
        <h1 class="text-4xl font-bold">DOCTOR</h1>
      </header>
      <div class="w-full flex justify-center mt-6">
        <div class="border border-gray-300 p-8 rounded-lg flex flex-col items-center bg-gray-100 w-full max-w-md">
          <div class="mb-6">
            <img :src="profile.imageUrl || 'https://via.placeholder.com/100'" alt="Profile Picture" class="rounded-full w-24 h-24 object-cover">
          </div>
          <table class="table-auto w-full mb-6" v-if="!isEditing">
            <tr>
              <td class="px-4 py-2 font-medium">Full name:</td>
              <td class="px-4 py-2">{{ profile.name }}</td>
            </tr>
            <tr>
              <td class="px-4 py-2 font-medium">Email:</td>
              <td class="px-4 py-2">{{ profile.email }}</td>
            </tr>
            <tr>
              <td class="px-4 py-2 font-medium">Specialist:</td>
              <td class="px-4 py-2">{{ profile.specialist }}</td>
            </tr>
            <tr>
              <td class="px-4 py-2 font-medium">Gender:</td>
              <td class="px-4 py-2">{{ profile.gender }}</td>
            </tr>
            <tr>
              <td class="px-4 py-2 font-medium">Phone Number:</td>
              <td class="px-4 py-2">{{ profile.mobile }}</td>
            </tr>
            <tr>
              <td class="px-4 py-2">
                <button @click="editProfile" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                  Edit
                </button>
              </td>
            </tr>
          </table>
          <form v-if="isEditing" @submit.prevent="saveProfile" class="w-full" enctype="multipart/form-data">
            <label for="name" class="block mt-2">Full name</label>
            <input v-model="editProfileData.name" type="text" id="name" required class="w-full p-2 border rounded mt-1"/>
  
            <label for="email" class="block mt-2">Email</label>
            <input v-model="editProfileData.email" type="email" id="email" required class="w-full p-2 border rounded mt-1"/>
  
            <label for="specialist" class="block mt-2">Specialist</label>
            <input v-model="editProfileData.specialist" type="text" id="specialist" required class="w-full p-2 border rounded mt-1"/>
  
            <label for="gender" class="block mt-2">Gender</label>
            <input v-model="editProfileData.gender" type="text" id="gender" required class="w-full p-2 border rounded mt-1"/>
  
            <label for="mobile" class="block mt-2">Phone Number</label>
            <input v-model="editProfileData.mobile" type="tel" id="mobile" required class="w-full p-2 border rounded mt-1"/>
  
  
  
            <div class="mt-4 flex">
              <button type="submit" class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 mr-2">
                Save
              </button>
              <button type="button" @click="cancelEdit" class="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        profile: {
          name: "",
          email: "",
          specialist: "",
          gender: "",
          mobile: "",
          imageUrl: "https://t4.ftcdn.net/jpg/02/29/53/11/360_F_229531197_jmFcViuzXaYOQdoOK1qyg7uIGdnuKhpt.jpg"  // URL for the profile picture
        },
        isEditing: false,
        editProfileData: {
          name: '',
          email: '',
          specialist: '',
          gender: '',
          mobile: '',
          
        }
      };
    },
    methods: {
      fetchProfile() {
        fetch('/api/doctor/profile', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then(response => response.json())
        .then(data => {
          this.profile = data;
        })
        .catch(error => {
          console.error('Error fetching profile:', error);
        });
      },
      editProfile() {
        this.isEditing = true;
        this.editProfileData = { ...this.profile, imageFile: null };
      },
      onFileChange(event) {
        this.editProfileData.imageFile = event.target.files[0];
      },
      saveProfile() {
        const formData = new FormData();
        formData.append('name', this.editProfileData.name);
        formData.append('email', this.editProfileData.email);
        formData.append('specialist', this.editProfileData.specialist);
        formData.append('gender', this.editProfileData.gender);
        formData.append('mobile', this.editProfileData.mobile);
        if (this.editProfileData.imageFile) {
          formData.append('image', this.editProfileData.imageFile);
        }
  
        fetch('/api/doctor/profile', {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          body: formData
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Error updating profile');
          }
          return response.json();
        })
        .then(data => {
          this.profile = data;
          this.isEditing = false;
          alert('Profile updated successfully');
        })
        .catch(error => {
          console.error('Error updating profile:', error);
          alert('Failed to update profile. Please try again.');
        });
      },
      cancelEdit() {
        this.isEditing = false;
      },
      logout() {
        // Handle logout action
      }
    },
    created() {
      this.fetchProfile();
    }
  };
  </script>
  
  <style scoped>
  </style>
  