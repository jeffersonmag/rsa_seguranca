object Form1: TForm1
  Left = 0
  Top = 0
  Caption = 'Form1'
  ClientHeight = 422
  ClientWidth = 769
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'Tahoma'
  Font.Style = []
  OldCreateOrder = False
  OnCreate = FormCreate
  PixelsPerInch = 96
  TextHeight = 13
  object Button1: TButton
    Left = 24
    Top = 24
    Width = 169
    Height = 21
    Caption = 'Chave'
    TabOrder = 0
    OnClick = Button1Click
  end
  object Button2: TButton
    Left = 24
    Top = 307
    Width = 169
    Height = 21
    Caption = 'Criptografar'
    TabOrder = 1
    OnClick = Button2Click
  end
  object Button3: TButton
    Left = 24
    Top = 334
    Width = 169
    Height = 21
    Caption = 'Descriptografar'
    TabOrder = 2
    OnClick = Button3Click
  end
  object cxTextEdit2: TcxTextEdit
    Left = 199
    Top = 307
    TabOrder = 3
    Width = 386
  end
  object cxTextEdit3: TcxTextEdit
    Left = 199
    Top = 334
    Properties.ReadOnly = True
    TabOrder = 4
    Width = 386
  end
  object cxTextEdit4: TcxTextEdit
    Left = 199
    Top = 275
    TabOrder = 5
    Text = 'Aqui a Mensagem'
    Width = 386
  end
  object Memo1: TMemo
    Left = 199
    Top = 24
    Width = 386
    Height = 121
    Lines.Strings = (
      'Memo1')
    TabOrder = 6
  end
  object Memo2: TMemo
    Left = 199
    Top = 151
    Width = 386
    Height = 118
    Lines.Strings = (
      'Memo1')
    TabOrder = 7
  end
  object RESTClient: TRESTClient
    Params = <
      item
      end>
    HandleRedirects = True
    Left = 68
    Top = 366
  end
  object RESTRequest: TRESTRequest
    Client = RESTClient
    Params = <>
    Response = RESTResponse
    SynchronizedEvents = False
    Left = 36
    Top = 366
  end
  object RESTResponse: TRESTResponse
    Left = 100
    Top = 366
  end
end
