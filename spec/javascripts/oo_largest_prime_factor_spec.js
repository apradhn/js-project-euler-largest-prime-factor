describe('Largest Prime Factor -- object oriented', function() {
  it('outputs the correct largest prime factor for 50', function() {
    var lpf = new LargestPrimeFactor(50);
    expect(lpf.number()).toEqual(5);
  });

  it('outputs the correct largest prime factor for 13195', function() {
    var lpf = new LargestPrimeFactor(13195);
    expect(lpf.number()).toEqual(29);
  });

  it('outputs the correct largest prime factor for 600851475143', function() {
    var lpf = new LargestPrimeFactor(600851475143);
    expect(lpf.number()).toEqual(6857);
  });
});