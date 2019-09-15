<template>

<div>
    <h2>Register</h2>

    <form class=myForm>
      <div>
      <div class=error v-if="!validName">Error: Name must be included</div>
      <label class=myLabel>Name:</label>
        <input class=input-field type="text" v-model="user.name" />
      </div>

      <div>
        <div class=error v-if="!validEmail">Error:Write email on correct form</div>
        <label class=myLabel>Email:</label>
        <input class=input-field type="email" v-model="user.email" />
      </div>

      <div>
        <div class=error v-if="!validPassword">Error: Write password on correct form, at least 7 letters</div>
        </div>
        <label class=myLabel>Password:</label>
        <input class=input-field type="password" v-model="user.password" />
      <div>

      <label class=myLabel>Birthday:</label>
      <div class=error v-if="!validBirthday">Error: You have to chose a valid date between 1900 and today</div>
      <label for="year">Year</label>
      <select id="year"
              class="form-control"
              v-model="selectedYear">
              <option v-for="year in getYears(1900, 2019)">{{ year }}</option>
      </select>

      <label for="month">Month</label>
      <select id="month"
              class="form-control"
              v-model="selectedMonth">
              <option v-for="month in months">{{ month }}</option>
      </select>

      <label for="day">Day</label>
      <select id="day"
              class="form-control"
              v-model="selectedDay">
              <option v-for="day in getDays()">{{ day }}</option>
      </select>
      </div>

      <div>
        <div class=error v-if="!validGDPR">Error: This must be approved</div>
      <label class=myLabel for="gdprCheck">
          <input type="checkbox"
                 value="gdprCheck"
                 v-model="checkboxChecked"> I approve the use of my data!
      </label>
  </div>

      <div>
      <button class="btn btn-primary"
          @click.prevent="register">Submit
      </button>
      </div>


      <div v-if="isSubmitted">
          <div>
              <h3>Collected Data</h3>
              <p>Name: <b>{{ user.name}}</b></p>
              <p>Email: <b>{{ user.email }}</b></p>
              <p>Password: <b>{{ user.password }}</b></p>
              <p>Birthday: <b>{{ user.birthday }}</b></p>
              <p>GDPR Approval: <b>{{ user.gdprApproval }}</b></p>
          </div>
      </div>


     </form>
  </div>


</template>


<script>

export default {
    data() {
        return {
            user: {
                name: null,
                birthday:'',
                password:'',
                email:'',
                gdprApproval:'',
            },
            errors: {},
            valid:true,
            validName:true,
            validEmail:true,
            validPassword: true,
            validDate:true,
            validBirthday:true,
            validGDPR:true,
            selectedYear: 2019,
            selectedMonth: 'January',
            selectedDay:1,
            checkboxChecked: false,

            years:[],
            months:['January', 'February', 'March', 'April', 'May', 'June', 'July',
                'August', 'September', 'October', 'November', 'December'],
            days:[],
            isSubmitted: false,
            displayResults: false,
        }
    },
    methods: {
        register() {

            this.errors = {}

            if (!this.user.name) {
                this.validName =false;
            } else {
                this.validName =true;
            }

            if (!this.user.email) {
                this.validEmail=false;
            }
            else if (!this.user.email.includes("@")) {
                this.validEmail=false;
            } else {
                this.validEmail = true;
            }

            if (!this.user.password) {
                this.validPassword =false;
            }
            else if (!(this.user.password.length > 6)) {
                this.validPassword =false;
            } else {
                this.validPassword =true;
            }
            if (!this.selectedYear || !this.selectedMonth || !this.selectedDay) {
                this.validBirthday =false;
            } else {
                this.user.birthday = new Date(this.selectedMonth + " " + this.selectedDay + "," + this.selectedYear )
                if (this.user.birthday.getDate() != this.selectedDay) {
                    this.validBirthday =false;
                } else {
                    this.validBirthday = true;
                }
            }

            if (this.checkboxChecked) {
                this.user.gdprApproval=true;
                this.validGDPR=true;
            } else {
                this.validGDPR=false;
                this.user.gdprApproval=false;
            }

            if (this.validName && this.validEmail && this.validPassword && this.validBirthday && this.validGDPR) {
                console.log("evertthing valid");
                this.isSubmitted=true;
            } else {
                this.isSubmitted=false;
                console.log("not valid");
            }
        },

        getYears(start, stop) {
            var years = [];
            for (var i = start; i <= stop; i++) {
                years.push(i);
            }
            return years.reverse();
        },
        getDays() {
            var days = [];
            for (var i = 1; i <= 31; i++) {
                days.push(i);
            }
            return days;
        },
        submitted() {
            this.isSubmitted = true;
        }
    },
}
</script>

<style scoped>
.error {
    color: red;
    font-size: small;
}
.input-field {
    padding:0.4rem;
    width:50%;


}
.myLabel {
    display:block;
    padding:2px;
    text-aligh: left;
}


@media (min_width:500px) {
	.input-field {
		width: 75%;
    }
}
</style>
