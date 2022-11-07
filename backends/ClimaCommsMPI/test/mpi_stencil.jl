using ClimaComms
using ClimaCommsMPI

include(joinpath(@__DIR__, "..", "..", "..", "test", "stencil.jl"))

stencil_test(ClimaCommsMPI.MPICommsContext())
stencil_test(ClimaCommsMPI.MPICommsContext(), persistent = true)
