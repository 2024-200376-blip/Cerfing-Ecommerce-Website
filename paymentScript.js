// For showing the container for cc/dc payment method
const paymentRadios = document.querySelectorAll('input[name="payment"]');
const cardInputs = document.getElementById('card-inputs');

 function toggleCardInputs() {
            
            const creditCardRadio = document.getElementById('credit-card');
            const cardInputsBox = document.getElementById('card-inputs');

            if (creditCardRadio && cardInputsBox) {
                if (creditCardRadio.checked) {
                    console.log("Credit Card selected - Showing inputs");
                    cardInputsBox.classList.add('active');
                } else {
                    console.log("Other payment selected - Hiding inputs");
                    cardInputsBox.classList.remove('active');
                }
            } else {
                console.error("Error");
            }
        }
        window.onload = function() {
            toggleCardInputs();
        };

// For showing "order confirmed" message / Blur function

function showOrderConfirmation() {
    const confirmation = document.getElementById('order-confirmation');
    if (confirmation) {
        confirmation.style.display = 'flex';
        document.body.classList.add('blur-active');
    }
}


// For automating barangay based from city

function generateNumberedBarangays(start, end) {
    let list = [];
    for (let i = start; i <= end; i++) {
        list.push("Barangay " + i);
    }
    return list;
}

const MetroManilaData = {
            "Mandaluyong": [
                "Addition Hills", "Bagong Silang", "Barangka Drive", "Barangka Ibaba", 
                "Barangka Ilaya", "Barangka Itaas", "Buayang Bato", "Burol", 
                "Daang Bakal", "Hagdang Bato Itaas", "Hagdang Bato Libis", "Harapin Ang Bukas", 
                "Highway Hills", "Hulo", "Mabini-J. Rizal", "Malamig", 
                "Mauway", "Namayan", "New Zañiga", "Old Zañiga", 
                "Pag-Asa", "Plainview", "Pleasant Hills", "Poblacion", 
                "San Jose", "Vergara", "Wack-Wack Greenhills"
            ],
            "Manila City": generateNumberedBarangays(1, 905),
            "Quezon City": [
                "Bagumbayan", "Bahay Toro", "Balingasa", "Batasan Hills", "Commonwealth", 
                "Project 6", "Project 8", "Sto. Domingo", "Tatalon", "Teachers Village", 
                "UP Campus", "White Plains"
            ],
            "Pasig City": [
                "Bagong Ilog", "Bagong Katipunan", "Bambang", "Buting", "Caniogan", 
                "Dela Paz", "Kapasmigan", "Kapitolyo", "Malinao", "Manggahan", 
                "Maybunga", "Oranbo", "Palatiw", "Pinagbuhatan", "Pineda", 
                "Rosario", "Sagad", "San Antonio", "San Joaquin", "San Jose", 
                "San Miguel", "San Nicolas", "Santa Cruz", "Santa Lucia", "Santa Rosa", 
                "Santo Tomas", "Santolan", "Sumilang", "Ugong"
            ],
            "Makati City": [
                "Bangkal", "Bel-Air", "Carmona", "Cembo", "Comembo", "Dasma", 
                "East Rembo", "Forbes Park", "Guadalupe Nuevo", "Guadalupe Viejo", 
                "Kasilawan", "La Paz", "Magallanes", "Olympia", "Palanan", 
                "Pembo", "Pinagkaisahan", "Pio Del Pilar", "Pitogo", "Poblacion", 
                "Post Proper Northside", "Post Proper Southside", "Rizal", 
                "San Antonio", "San Isidro", "San Lorenzo", "Santa Cruz", 
                "Singkamas", "South Cembo", "Tejeros", "Urdaneta", "Valenzuela", 
                "West Rembo"
            ],
            "Taguig City": [
                "Bagong Tanyag", "Bagumbayan", "Bambang", "Calzada", "Central Bicutan", 
                "Central Signal Village", "Fort Bonifacio", "Hagonoy", "Ibayo-Tipas", 
                "Katuparan", "Ligid-Tipas", "Lower Bicutan", "Maharlika Village", 
                "Napindan", "New Lower Bicutan", "North Daang Hari", "North Signal Village", 
                "Palingon", "Pinagsama", "San Miguel", "Santa Ana", "South Daang Hari", 
                "South Signal Village", "Tuktukan", "Upper Bicutan", "Ususan", 
                "Wawa", "Western Bicutan"
            ],
            "Pasay City": generateNumberedBarangays(1, 201),
            "Parañaque City": [
                "Baclaran", "B.F. Homes", "Don Bosco", "Don Galo", "La Huerta", "Marcelo Green", 
                "Merville", "Moonwalk", "San Antonio", "San Dionisio", "San Isidro", "San Martin de Porres", 
                "Santo Niño", "Sun Valley", "Tambo", "Vitalez"
            ],
            "Pateros": [
                "Aguho", "Magtanggol", "Martirez del 96", "Poblacion", "San Pedro", "San Roque", "Santa Ana", 
                "Santo Rosario-Kanluran", "Santo Rosario-Silangan", "Tabacalera"
            ],
            "Muntinlupa City": [
                "Alabang", "Ayala Alabang", "Bayanan", "Buli", "Cupang", "Poblacion", "Putatan", "Sucat", 
                "Tunasan"
            ],
            "Marikina City": [
                "Barangka", "Calumpang", "Concepcion Uno", "Concepcion Dos", "Fortune", "Industrial Valley", 
                "Jesus Dela Peña", "Malanday", "Marikina Heights", "Nangka", "Parang", "San Roque", 
                "Santa Elena", "Santo Niño", "Tañong", "Tumana"
            ],
            "Las Piñas City": [
                "Almanza Uno", "Almanza Dos", "BF International Village", "Daniel Fajardo", "Elias Aldana", 
                "Ilaya", "Manuyo Uno", "Manuyo Dos", "Pamplona Uno", "Pamplona Dos", "Pamplona Tres", "Pilar", 
                "Pulang Lupa Uno", "Pulang Lupa Dos", "Talon Uno", "Talon Dos", "Talon Tres", "Talon Kuatro", "Zapote"
            ],
            "Caloocan City": generateNumberedBarangays(1, 193),
            "Navotas City": [
                "Bagumbayan North", "Bagumbayan South", "Bangkulasi", "Daanghari", "Navotas East", "Navotas West", 
                "North Bay Blvd., North", "North Bay Blvd., South", "San Jose", "San Roque", "Sipac-Almacen", 
                "Tangos North", "Tangos South", "Tanza 1", "Tanza 2"
            ],
            "Malabon City": [
                "Acacia", "Baritan", "Bayan-bayanan", "Catmon", "Concepcion", "Dampalit", "Flores", "Hulong Duhat", 
                "Ibaba", "Longos", "Maysilo", "Muzon", "Niugan", "Panghulo", "Potrero", "San Agustin", "Santolan", 
                "Tañong", "Tinajeros", "Tonsuya", "Tugatog"
            ],
            "San Juan City": [
                "Addition Hills", "Balong-Bato", "Batis", "Corazon de Jesus", "Ermitaño", "Greenhills", "Halo-halo (St. Joseph)",
                "Isabelita", "Kabayanan", "Little Baguio", "Maytunas", "Onse", "Pasadeña", "Pedro Cruz", "Progreso", "Rivera",
                "Salapan", "San Perfecto", "Santa Lucia", "Tibagan", "West Crame"
            ],
            "Valenzuela City": [
                "Arkong Bato", "Bagbaguin", "Balangkas", "Bignay", "Bisig", "Canumay East", "Canumay West", "Coloong", "Dalandanan", 
                "Gen. T. de Leon", "Isla", "Karuhatan", "Lawang Bato", "Lingunan", "Mabolo", "Malanday", "Malinta", "Mapulang Lupa", 
                "Marulas", "Maysan", "Palasan", "Parada", "Pariancillo Villa", "Paso de Blas", "Pasolo", "Poblacion", "Pulo", 
                "Punturin", "Rincon", "Tagalag", "Ugong", "Viente Reales", "Wawang Pulo"
            ],
        };

        function loadBarangays() {
            const citySelect = document.getElementById("city-select");
            const barangaySelect = document.getElementById("barangay-select");
            
            
            const selectedCity = citySelect.value;
            barangaySelect.innerHTML = '<option value="" selected disabled>Select Barangay</option>';

            if (selectedCity && MetroManilaData[selectedCity]) {
                
                const barangays = MetroManilaData[selectedCity];
                barangays.forEach(brgy => {
                    const option = document.createElement("option");
                    option.value = brgy;
                    option.text = brgy;
                    barangaySelect.add(option);
                });
                barangaySelect.disabled = false;
            } else {
                barangaySelect.disabled = true;
            }
        }

// Input Field Validations
function ValidateForm() {
    const fname = document.getElementById('fname');
    const lname = document.getElementById('lname');
    const address = document.getElementById('address');
    const city = document.getElementById('city-select');
    const barangay = document.getElementById('barangay-select');
    const zip = document.getElementById('zip');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');

    let isValid = true;

    function setError(element, message) {
        const inputGroup = element.parentElement;
        const errorDisplay = inputGroup.querySelector('.error-msg');

        errorDisplay.innerText = message;
        inputGroup.classList.add('error');
        inputGroup.classList.remove('success')
        isValid = false;
    }

    function setSuccess(element) {
        const inputGroup = element.parentElement;
        const errorDisplay = inputGroup.querySelector('.error-msg');

        errorDisplay.innerText = '';
        inputGroup.classList.add('success');
        inputGroup.classList.remove('error');
    }

    if(fname.value.trim() === '') {
        setError(fname, 'First Name is required');
    } else {
        setSuccess(fname);
    }

    if(lname.value.trim() === '') {
        setError(lname, 'Last Name is required');
    } else {
        setSuccess(lname);
    }

    if(address.value.trim() === '') {
        setError(address, 'Address is required');
    } else {
        setSuccess(address);
    }

    if(city.value === '' || city.value === null) {
        setError(city, 'Please select a city');
    } else {
        setSuccess(city);
    }

    if(barangay.disabled && (barangay.value === '' || barangay.value === null)) {
        setError(barangay, 'Please select a barangay');
    } else if (!barangay.disabled) {
        setSuccess(barangay);
    }

    if(zip.value.trim() === '') {
        setError(zip, 'Zip code is required');
    } else {
        setSuccess(zip);
    }

    if(phone.value.trim() === '') {
        setError(phone, 'Phone number is required');
    } else {
        setSuccess(phone);
    }

    if(email.value.trim() === '') {
        setError(email, 'Email is required');
    } else {
        setSuccess(email);
    }

    // PAYMENT METHOD/ CC/DC VALIDATION FOR THE INPUTS OF CARD INFORMATION

    const creditCardRadio =  document.getElementById('credit-card');
    if (creditCardRadio && creditCardRadio.checked) {
        const cardNum = document.querySelector('#card-inputs input[placeholder="0000 0000 0000 0000"]');
        const cardName = document.querySelector('#card=inputs input[placeholder="JUAN DELA CRUZ"]');

        if(cardNum.value.trim() === '') {
            cardNum.style.borderColor = '#ff4757'
            isValid = false;
        } else {
            cardNum.style.borderColor = '#e1e1e1';
        }

        if(cardName.value.trim() === '') {
            cardName.style.borderColor = '#ff4757';
            isValid = false;
        } else {
            cardName.style.borderColor = '#e1e1e1';
        }
    }
    if(isValid) {
        showOrderConfirmation();
    } else {
        document.querySelector('.billing-form').scrollIntoView({ behavior:'smooth'});
    }
}