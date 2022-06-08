// Document Variables

// const submitBtn = document.querySelector('input.btn')
const gradeForm = document.querySelector('#grade-form')
const currentGradeInput = document.querySelector('#current-grade')
const desiredGradeInput = document.querySelector('#desired-grade')
const finalPercentageInput= document.querySelector('#final')
const resultsTitle = document.querySelector('#title-result')
//Results
const gradeResult = document.querySelector('#grade-needed')




//Event Listener Function
const runEventListeners = () => {
    // submitBtn.addEventListener('click',submitHandler)
    gradeForm.addEventListener('submit',submitHandler)
    
}

const submitHandler = (e) => {
    e.preventDefault()
    console.log('object');
    document.querySelector('.results').style.display='none'

    document.querySelector('#loading').style.display='block'
    
    setTimeout(calculateGrade,500)

}
const calculateGrade = () => {
    
    //Mathematical constants
    const currentGradeFloat = parseFloat(currentGradeInput.value); //take values from inputs, text from other things
    const desiredGradeFloat = parseFloat(desiredGradeInput.value) 
    const finalPercentageFloat = parseFloat(finalPercentageInput.value)/100

    console.log(finalPercentageInput);
    //Result
    //Instead of using Math.js one time, just divide and undivide to round to 2 decimals
    const gradeNeeded = Math.round(((desiredGradeFloat - ((1-finalPercentageFloat) * currentGradeFloat) )/(finalPercentageFloat)))
    

    if(gradeNeeded <100 && gradeNeeded>0){
        gradeResult.value = gradeNeeded.toFixed(2)
    } else {
        showError()
    }

    document.querySelector('.results').style.display='block'
    document.querySelector('#loading').style.display='none'
}

const showError = () => {
    gradeResult.value='Maybe There Is Extra Credit?'

    const soSorry = document.createElement('p')
    soSorry.innerText='Im So Sorry...'
    soSorry.className='mt-4'

    const errorDiv = document.createElement('div')
    errorDiv.className='alert alert-danger mt-4'
    errorDiv.appendChild(soSorry)

    resultsTitle.appendChild(errorDiv)
    setTimeout(clearError,2000)
}

const clearError = () => {
    document.querySelector('.alert').remove();
    gradeResult.value = '';
    document.querySelector('.results').style.display='none'
}

runEventListeners();