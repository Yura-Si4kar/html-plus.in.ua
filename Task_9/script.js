alert('��������� �����!');
alert('�������� ���� �� 2!');
alert('�� ���������� ������� 7!');

calculate();

function calculate() {
    let number;
    let result;
  
    number = +prompt('������ ���������!');
    result = (number-7)/2 <= 0 ? alert('����� �� ���� ����� 0') : (number-7)/2;
  
    return alert(`�����, ��� �� �������� ${result}`);
}