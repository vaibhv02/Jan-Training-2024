// QR Code Generator
function generateQRCode() {
    const textInput = document.getElementById('text-input').value;
    const qrcodeDiv = document.getElementById('qrcode');
    qrcodeDiv.innerHTML = '';

    if (textInput.trim() !== '') {
        const qrcode = new QRCode(qrcodeDiv, {
            text: textInput,
            width: 128,
            height: 128
        });
    }
}

// QR Code Scanner
let scanner;

function startScanner() {
    showTab('scanner');

    if (!scanner) {
        scanner = new Instascan.Scanner({ video: document.getElementById('preview') });

        scanner.addListener('scan', function (content) {
            alert('Scanned: ' + content);
        });
    }

    Instascan.Camera.getCameras().then(function (cameras) {
        if (cameras.length > 0) {
            scanner.start(cameras[0]);
            document.getElementById('preview').style.display = 'block';
        } else {
            alert('No cameras found.');
        }
    }).catch(function (e) {
        console.error(e);
    });
}

// Image Upload
function scanImage() {
    showTab('image-upload');

    const fileInput = document.getElementById('file-input');
    const uploadedImage = document.getElementById('uploaded-image');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            uploadedImage.src = e.target.result;
            uploadedImage.style.display = 'block';
            alert('Scanned image: ' + file.name);
        };

        reader.readAsDataURL(file);
    } else {
        alert('Please select an image.');
    }
}

// Tab Switching
function showTab(tabId) {
    const tabs = ['generator', 'scanner', 'image-upload'];

    tabs.forEach(tab => {
        const element = document.getElementById(tab);
        element.classList.remove('active-tab');
    });

    document.getElementById(tabId).classList.add('active-tab');
}
