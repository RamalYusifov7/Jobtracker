import styled from "styled-components";

export const ResgisterWrapper=styled.section`
  background-color:#f5f5f5;
  display:flex;
  align-items:center;
  justify-content:center;
  padding-top:16px;
  padding-bottom:16px;
  height:100vh;
  form{
    background-color:#fff;
    width:100%;
    max-width:400px;
    padding:36px 38px;
    border-radius:16px;
    box-shadow:${({theme})=>theme.shadows.shadow1};
    .form-header{
        text-align:center;
        .logo{
          margin:auto
        }
    }
  }
  .logo{
    margin-bottom:20px;
  }
  h3{
    font-size:28px;
    margin-bottom:24px;
    margin-top:16px;
  }
  button.submit{
    width:100%
  }
  .demo-user{
    width:100%;
    margin-top:12px;
  }
  .form-footer{
    margin-top:16px;
    display:flex;
    justify-content:center;
    align-items:center;
    a{
      color:${({theme})=>theme.colors.main};
      display:inline-block;
      margin-left:8px;
    }
  }

  @media(max-width:576px){
    h3{
      margin-top:12px;
      font-size:24px;
    }
  }
  ;
`