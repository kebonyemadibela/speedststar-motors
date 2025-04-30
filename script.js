
        document.addEventListener("DOMContentLoaded", function () {
            const nameInput = document.getElementById("name");
            const emailInput = document.getElementById("email");
            const phoneInput = document.getElementById("phone");
            const messageInput = document.getElementById("message");
            const submitBtn = document.getElementById("submitBtn");
            
            function validateForm() {
                let isValid = true;
                
                if (!/^[a-zA-Z ]+$/.test(nameInput.value.trim())) {
                    document.getElementById("nameError").textContent = "Only letters are allowed.";
                    isValid = false;
                } else {
                    document.getElementById("nameError").textContent = "";
                }
                
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
                    document.getElementById("emailError").textContent = "Enter a valid email.";
                    isValid = false;
                } else {
                    document.getElementById("emailError").textContent = "";
                }
                
                if (phoneInput.value.trim() !== "" && !/^[0-9]+$/.test(phoneInput.value.trim())) {
                    document.getElementById("phoneError").textContent = "Only digits are allowed.";
                    isValid = false;
                } else {
                    document.getElementById("phoneError").textContent = "";
                }
                
                if (messageInput.value.trim().length < 10) {
                    document.getElementById("messageError").textContent = "Feedback must be at least 10 characters.";
                    isValid = false;
                } else {
                    document.getElementById("messageError").textContent = "";
                }
                
                submitBtn.disabled = !isValid;
            }
            
            document.getElementById("feedbackForm").addEventListener("input", validateForm);
        });

